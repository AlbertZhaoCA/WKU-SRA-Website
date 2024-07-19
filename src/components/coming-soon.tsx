export default function ComingSoon() {
    return( 
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center text-center">
  <div className="text-white">
    <h1 className="text-4xl font-bold">建设中 🎒</h1>
    <p className="mt-4 text-lg">美好即将到来 🚀</p>
  </div>
  <div className="mt-8">
    <form action="#" method="post" className="flex items-center">
      <input
        type="email"
        name="email"
        placeholder="留下你的邮箱"
        className="py-2 px-4 bg-gray-800 text-white rounded-l-md focus:outline-none"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 py-2 px-4 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
      >
        订阅
      </button>
    </form>
  </div>
    </div>)
   
    }