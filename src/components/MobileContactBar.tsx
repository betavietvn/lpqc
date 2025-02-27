export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 lg:hidden">
      <div className="flex justify-between items-center px-2 py-2">
        <a
          href="https://betaviet.vn/"
          className="flex flex-col items-center space-y-1"
        >
          <img
            src="https://betaviet.vn/wp-content/uploads/2023/12/logo-betaviet.svg"
            alt="BetaViet"
            className="h-8"
          />
          <span className="text-xs">Trang chủ</span>
        </a>

        <a
          href="tel:0915010800"
          className="flex flex-col items-center space-y-1"
        >
          <img src="/whatsapp-icon.png" alt="Gọi ngay" className="w-8 h-8" />
          <span className="text-xs">Gọi ngay</span>
        </a>

        <a
          href="https://zalo.me/1474744784995246140"
          className="flex flex-col items-center space-y-1"
        >
          <img src="/zalo-icon.png" alt="Zalo" className="w-8 h-8" />
          <span className="text-xs">Zalo</span>
        </a>

        <a
          href="https://m.me/521739221200526"
          className="flex flex-col items-center space-y-1"
        >
          <img src="/messenger-icon.png" alt="Messenger" className="w-8 h-8" />
          <span className="text-xs">Messenger</span>
        </a>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col items-center space-y-1"
        >
          <img
            src="https://betaviet.vn/wp-content/uploads/2023/12/icon_form.png"
            alt="Tư vấn"
            className="w-8 h-8"
          />
          <span className="text-xs">Tư vấn</span>
        </button>
      </div>
    </div>
  );
}
