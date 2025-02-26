export default function BenefitsSection() {
  const reasons = [
    {
      image:
        "https://betaviet.vn/wp-content/uploads/2024/01/tu-van-tan-tam-chuyen-nghiep.jpg",
      title: "Tư vấn tận tâm – chuyên nghiệp",
      description:
        "Hãy là người đầu tiên trong số bạn bè của bạn thích nơi đăng này",
    },
    {
      image:
        "https://betaviet.vn/wp-content/uploads/2024/01/tu-van-tan-tam-chuyen-nghiep.jpg",
      title: "Tư vấn tận tâm – chuyên nghiệp",
      description:
        "Hãy là người đầu tiên trong số bạn bè của bạn thích nơi đăng này",
    },
    {
      image:
        "https://betaviet.vn/wp-content/uploads/2024/01/tu-van-tan-tam-chuyen-nghiep.jpg",
      title: "Tư vấn tận tâm – chuyên nghiệp",
      description:
        "Hãy là người đầu tiên trong số bạn bè của bạn thích nơi đăng này",
    },
    {
      image:
        "https://betaviet.vn/wp-content/uploads/2024/01/tu-van-tan-tam-chuyen-nghiep.jpg",
      title: "Tư vấn tận tâm – chuyên nghiệp",
      description:
        "Hãy là người đầu tiên trong số bạn bè của bạn thích nơi đăng này",
    },
    {
      image:
        "https://betaviet.vn/wp-content/uploads/2024/01/tu-van-tan-tam-chuyen-nghiep.jpg",
      title: "Tư vấn tận tâm – chuyên nghiệp",
      description:
        "Hãy là người đầu tiên trong số bạn bè của bạn thích nơi đăng này",
    },
    {
      image:
        "https://betaviet.vn/wp-content/uploads/2024/01/tu-van-tan-tam-chuyen-nghiep.jpg",
      title: "Tư vấn tận tâm – chuyên nghiệp",
      description:
        "Hãy là người đầu tiên trong số bạn bè của bạn thích nơi đăng này",
    },
    {
      image:
        "https://betaviet.vn/wp-content/uploads/2024/01/tu-van-tan-tam-chuyen-nghiep.jpg",
      title: "Tư vấn tận tâm – chuyên nghiệp",
      description:
        "Hãy là người đầu tiên trong số bạn bè của bạn thích nơi đăng này",
    },
    {
      image:
        "https://betaviet.vn/wp-content/uploads/2024/01/tu-van-tan-tam-chuyen-nghiep.jpg",
      title: "Tư vấn tận tâm – chuyên nghiệp",
      description:
        "Hãy là người đầu tiên trong số bạn bè của bạn thích nơi đăng này",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#B87B44] mb-4">
          LÝ DO CHỌN BETAVIET
          <div className="flex justify-center gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 h-6 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://betaviet.vn/wp-content/uploads/2024/01/team-building-betaviet.jpg"
                alt={reason.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <img
                    src="https://betaviet.vn/wp-content/uploads/2024/01/facebook.png"
                    alt="Facebook"
                    className="w-6 h-6"
                  />
                  <span className="text-blue-600 font-medium">Thích Trang</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="https://betaviet.vn/wp-content/uploads/2024/01/messenger.png"
                    alt="Messenger"
                    className="w-6 h-6"
                  />
                  <span className="text-blue-600 font-medium">
                    Gửi tin nhắn
                  </span>
                </div>
                <h3 className="font-medium text-center">{reason.title}</h3>
                <p className="text-sm text-gray-600 text-center">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
