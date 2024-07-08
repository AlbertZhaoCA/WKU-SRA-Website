import Modal from "@/components/ui/pop-up-pic-modal"

export default function Intro() {
    return(
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-10 mb-10">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">📨 沟通与交流</h2>
        <p className="mb-12 text-lg text-gray-500">欢迎加入科技科研协会公关部，开启你的沟通与交流之旅！

        </p>
        <div className="w-full">
            <div className="flex flex-col w-full mb-10 sm:flex-row">
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                            <div className="flex items-center -mt-1">
                                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">💬 提升交流能力</h3>
                            </div>
                            <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                            <p className="mb-2 text-gray-600">想要在活动公关领域游刃有余？公关部将是你最好的选择！我们提供丰富的实践机会，从活动文案撰写到人员邀请沟通，从活动策划到公关危机处理，让你的沟通能力和协调能力在实践中得到全方位提升。</p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2">
                    <div className="relative h-full ml-0 md:mr-10">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                            <div className="flex items-center -mt-1">
                                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">🤝 构建合作网络</h3>
                            </div>
                            <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                            <p className="mb-2 text-gray-600">在这里，你不仅能在如何进行有效的公关和传播上得到锻炼，还能和同学们一起策划活动，一起宣传推广，共同成长，共同进步！

</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full mb-5 sm:flex-row">
                <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                    <div className="relative h-full ml-0 mr-0 sm:mr-10">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                            <div className="flex items-center -mt-1">
                                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">🌟 施展你的才华</h3>
                            </div>
                            <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                            <p className="mb-2 text-gray-600">公关部为你提供展示才华的舞台。无论是校内的宣传比赛还是科技创新活动，我们都将为你提供全方位的支持，让你的才华和创意得以展现。
                            </p>
                        </div>
                    </div>
                </div>
          
                    <div className="relative h-full ml-0 md:mr-10">
                        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                        <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                            <div className="flex items-center -mt-1">
                                <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">📣 宣传与传播</h3>
                            </div>
                            <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                            <p className="mb-2 text-gray-600">公关部，我们不仅是传播信息，更是科技与创新的使者。通过多样化的宣传渠道和创新的传播策略，我们将科研成果和活动的消息传递给更多人，让更多人了解并参与到我们的科技世界中来！</p>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>)
    
};
