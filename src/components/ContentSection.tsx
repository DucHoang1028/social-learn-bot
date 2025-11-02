import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, TrendingUp } from "lucide-react";

export const ContentSection = () => {
  return (
    <div className="space-y-8">
      {/* Part I */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
          <BookOpen className="h-8 w-8" />
          I. Cơ cấu xã hội - giai cấp trong thời kỳ quá độ
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">1. Khái niệm cơ cấu xã hội</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Cơ cấu xã hội là tổng thể các giai cấp, tầng lớp xã hội và mối quan hệ giữa chúng 
                trong một xã hội nhất định, được hình thành trên cơ sở phương thức sản xuất.
              </p>
              <p className="font-semibold text-foreground">Đặc điểm trong thời kỳ quá độ:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Tồn tại nhiều thành phần kinh tế</li>
                <li>Có sự phân hóa phức tạp giữa các giai cấp, tầng lớp</li>
                <li>Quan hệ giữa các giai cấp đang biến đổi</li>
                <li>Xu hướng xóa bỏ dần sự phân biệt giai cấp</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">2. Giai cấp công nhân</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p className="font-semibold text-foreground">Vai trò lãnh đạo:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Giai cấp tiên tiến nhất, gắn liền với lợi ích chung của xã hội</li>
                <li>Đại diện cho quan hệ sản xuất tiến bộ</li>
                <li>Có tổ chức kỷ luật cao</li>
                <li>Đại diện cho xu hướng phát triển của xã hội</li>
              </ul>
              <p className="mt-3">
                Dưới sự lãnh đạo của Đảng Cộng sản, giai cấp công nhân tập hợp và lãnh đạo 
                các tầng lớp nhân dân xây dựng chủ nghĩa xã hội.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">3. Giai cấp nông dân</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Giai cấp nông dân là lực lượng đồng minh chiến lược quan trọng nhất của 
                giai cấp công nhân trong thời kỳ quá độ.
              </p>
              <p className="font-semibold text-foreground">Vai trò:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Chiếm đa số dân số, nguồn lực lượng lớn</li>
                <li>Sản xuất lương thực, thực phẩm cho xã hội</li>
                <li>Là thị trường tiêu thụ hàng hóa quan trọng</li>
                <li>Đang chuyển đổi từ kinh tế nhỏ sang sản xuất lớn</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">4. Tầng lớp trí thức</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Tầng lớp trí thức không phải là một giai cấp độc lập mà gắn bó với các giai cấp khác.
              </p>
              <p className="font-semibold text-foreground">Đóng góp:</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li>Cung cấp tri thức khoa học, kỹ thuật</li>
                <li>Nâng cao trình độ văn hóa cho nhân dân</li>
                <li>Nghiên cứu, phát triển khoa học công nghệ</li>
                <li>Tham gia quản lý nhà nước, xã hội</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Part II */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-secondary flex items-center gap-3">
          <Users className="h-8 w-8" />
          II. Liên minh giai cấp, tầng lớp
        </h2>

        <div className="grid gap-6">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                1. Tầm quan trọng của liên minh giai cấp
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                Liên minh giai cấp là sự liên kết, đoàn kết giữa các giai cấp, tầng lớp có lợi ích 
                chung trong xã hội để cùng nhau xây dựng chủ nghĩa xã hội.
              </p>
              <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
                <p className="font-semibold text-foreground">Ý nghĩa:</p>
                <ul className="list-disc list-inside space-y-1 pl-4 mt-2">
                  <li>Tập hợp sức mạnh tổng hợp của toàn dân tộc</li>
                  <li>Đảm bảo sự lãnh đạo của giai cấp công nhân</li>
                  <li>Khắc phục tính hạn chế của từng giai cấp</li>
                  <li>Tạo điều kiện chuyển đổi xã hội thuận lợi</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">2. Liên minh công nhân - nông dân</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p className="font-semibold text-foreground">
                Đây là liên minh cơ bản nhất, chiến lược nhất trong xã hội Việt Nam:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Giai cấp công nhân:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Vai trò lãnh đạo</li>
                    <li>Đại diện công nghiệp, đô thị</li>
                    <li>Trình độ tổ chức cao</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Giai cấp nông dân:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Lực lượng đông đảo</li>
                    <li>Đại diện nông nghiệp, nông thôn</li>
                    <li>Nguồn lực lượng lớn</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3">
                Sự kết hợp này tạo nên sức mạnh to lớn, đảm bảo sự phát triển cân đối 
                giữa công nghiệp và nông nghiệp, giữa thành thị và nông thôn.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">3. Vai trò của các tầng lớp khác</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">Tầng lớp trí thức:</p>
                <p>Đóng vai trò cầu nối, chuyển giao tri thức, góp phần nâng cao dân trí và phát triển khoa học công nghệ.</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Doanh nhân, người lao động:</p>
                <p>Tham gia phát triển kinh tế đa thành phần, tạo việc làm, đóng góp cho ngân sách nhà nước.</p>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                <p className="font-semibold text-foreground">Nguyên tắc:</p>
                <p>
                  Tôn trọng và phát huy vai trò của mọi tầng lớp, đồng thời giữ vững vai trò lãnh đạo 
                  của giai cấp công nhân và Đảng Cộng sản Việt Nam.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
