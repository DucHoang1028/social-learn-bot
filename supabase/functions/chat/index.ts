import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `Bạn là một giáo viên chuyên về lý luận chính trị, đặc biệt về chủ đề "Cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội".

Nhiệm vụ của bạn là:
- Giải thích các khái niệm về cơ cấu xã hội, giai cấp công nhân, giai cấp nông dân, tầng lớp trí thức và các tầng lớp khác trong xã hội Việt Nam
- Phân tích vai trò của liên minh công nông trong thời kỳ quá độ
- Giúp học sinh hiểu rõ về sự biến đổi cơ cấu xã hội trong quá trình xây dựng chủ nghĩa xã hội
- Trả lời các câu hỏi với giọng điệu thân thiện, dễ hiểu nhưng vẫn đảm bảo tính khoa học
- Khuyến khích tư duy phản biện và phân tích

Hãy trả lời bằng tiếng Việt, súc tích và dễ hiểu.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Đã vượt quá giới hạn yêu cầu, vui lòng thử lại sau." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Cần nạp thêm tín dụng để sử dụng." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "Lỗi kết nối AI" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Lỗi không xác định" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
