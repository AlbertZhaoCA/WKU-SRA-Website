import LeaderIntro from './LeaderIntro';

export default function SciIntro() {

    return (
        <div className="bg-black text-white ">
            <section className="min-h-screen bg-animated cyber-grid py-20 relative">
                <div className="container mx-auto px-4">

                    <h2 className="text-4xl font-bold text-center mb-12 neon-text glitch-effect" data-text="理科学术部">理科学术部</h2>
                    <LeaderIntro/>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="feature-card rounded-lg p-6 floating">
                            <div className="text-5xl mb-4 text-cyan-400 feature-icon">
                            <i className="fa-solid fa-plane"></i>                            </div>
                            <h3 className="text-2xl font-bold mb-2">🦅对科研感兴趣的你想要大展宏图？
                            </h3>
                            <p className="text-gray-300">Welcome! 在理科学术部内，你可以就任何你感兴趣的项目与教授进行沟通并开展研究，也可以找到志同道合的朋友一起做项目，让科研丰富你的个人履历，为出国深造做足准备!
                            </p>
                        </div>
                        <div className="feature-card rounded-lg p-6 floating" style={{ animationDelay: '2s' }}>              
                        <div className="text-5xl mb-4 text-pink-500 feature-icon">
                        <i className="fa-solid fa-book"></i>       
                         </div>
                            <h3 className="text-2xl font-bold mb-2">🎓没有任何科研经验的你仍然对科研抱有浓厚兴趣？
                            </h3>
                            <p className="text-gray-300">Just come here and join us! 理科学术部内有很多科研能力强的学长学姐们，他们很愿意给上进的你传授实用的科研推进要领，包括但不限于如何使用GitHub平台，如何高效复现模型，如何使用Claude等AI工具高效读论文以及使用LaTeX排版等，让你短时间内迅速建立科研能力!
                            </p>
                        </div>
                        <div className="feature-card rounded-lg p-6 floating" style={{ animationDelay: '2s' }}>
                            <div className="text-5xl mb-4 text-purple-500 feature-icon">
                            <i className="fa-solid fa-list"></i>                            </div>
                            <h3 className="text-2xl font-bold mb-2">🔭科研之路道阻且长，不知四年如何规划？
                            </h3>
                            <p className="text-gray-300">Don’t panic! 理科学术部的学长学姐们会将他们自己过去的学习经验传授给你，告诉你要如何合理安排选课，如何权衡GPA与科研项目，如何使用markdown清晰地做课程笔记，如何逐渐找到自己喜欢的fields并加以深入；他们更会鼓励你参与SRD等活动，在这类盛大的场合展示自己的研究思路与成果。从零到一，你可以!
                            </p>
                        </div>
                   
                    </div>
                </div>
            </section>
        </div>
    );

};
