import type { heavyProfileProps } from "@/utils/types";

export default function HeavyProfile({
    name, majorInfo, contactInfo, researchInterests, projects, url, quote, shortBio
}: heavyProfileProps) {
    return (
        <section className="w-full overflow-hidden dark:bg-gray-900">
            <div className="w-full mx-auto">

                <header className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center mb-32">
                    <img className="inline-flex object-cover border-4 border-indigo-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 bg-indigo-50 text-indigo-600 h-24 w-24 !h-48 !w-48" src="https://i.pinimg.com/originals/71/57/ae/7157ae2d6d9c27891dae72235e7b56df.jpg" alt="头像" />
                    <h1 className="text-2xl text-gray-500 font-bold mt-2">
                        {name}
                    </h1>
                    <h2 className="text-base md:text-xl text-gray-500 font-bold">
                        {majorInfo && `${majorInfo?.[0]} @`}
                        <a href={url} target="_blank"
                            className="text-indigo-900 hover:text-indigo-600 font-bold border-b-0 hover:border-b-4 hover:border-b-indigo-300 transition-all mb-2">
                            {majorInfo?.[1]}
                        </a>
                    </h2>
                    {
                        contactInfo &&
                        <ul className="flex flex-row mt-2">
                            {
                                contactInfo.map((contact, index) => (
                                    <li key={contact.name} className="mx-2">
                                        <a href={contact.url} target="_blank" aria-label={contact.name} />
                                        <svg className="h-6 text-indigo-700 hover:text-indigo-300" fill="currentColor" role="img" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <title>{contact.name}</title>
                                            <path
                                                d={contact.svg}>
                                            </path>
                                        </svg>
                                    </li>
                                ))}
                        </ul>
                    }

                </header>

             <div
                    className="mg-10 xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]">
                    {
                        shortBio&&
                        <div className="text-gray-700 dark:text-gray-400  text-md text-pretty sm:text-center xs:text-justify">
                                {shortBio.map((bio,index) => {
                                    return (
                                    <div className="mb-8" key={index}>
                                        <h1 className="text-center text-gray-800 dark:text-white text-2xl font-serif">{shortBio[index].title}</h1>
                                        <p className="max-w-2xl text-gray-700 dark:text-gray-400 text-md text-pretty sm:text-center xs:text-justify">
                                        {shortBio[index].content}
                                        </p>
                                    </div>)
                                })}
                        </div>
                        
                    }
                  
                    {researchInterests && <ul>
                        {
                         researchInterests.map((interest, index) =>  <li key={interest} className="text-gray-700 dark:text-gray-400 text-md text-pretty sm:text-center xs:text-justify">
                            {interest}
                         </li>)
                        }
                       
                    </ul>}

                    <blockquote className="relative">
                        <svg className="absolute -top-6 -start-8 size-16 text-gray-100 dark:text-neutral-700" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" fill="currentColor"></path>
                        </svg>

                        <div className="relative z-10">
                            <p className="text-xl text-gray-800 md:text-3xl md:leading-normal dark:text-white"><em>
                                {quote}
                            </em></p>
                        </div>
                    </blockquote>


                    <div className="w-full flex gap-4 justify-center items-center mt-10">
                        <div
                            className="xl:w-1/4 xl:h-32 lg:w-1/5 lg:h-32 md:w-1/5 md:h-28 sm:w-1/3 sm:h-[5rem] xs:w-1/3 xs:h-[4rem] flex justify-center items-center rounded-sm text-center text-lg px-6 py-4 border-2 border-dashed border-gray-300 dark:text-white dark:border-2 dark:border-dashed dark:border-gray-700">
                            这个地方放project,也可定制
                        </div>

                        <div
                            className="xl:w-1/4 xl:h-32 lg:w-1/5 lg:h-32 md:w-1/5 md:h-28 sm:w-1/3 sm:h-[5rem] xs:w-1/3 xs:h-[4rem] flex justify-center items-center rounded-sm text-center text-lg px-6 py-4 border-2 border-dashed border-gray-300 dark:text-white dark:border-2 dark:border-dashed dark:border-gray-700">
                            这个地方放project
                        </div>

                        <div
                            className="xl:w-1/4 xl:h-32 lg:w-1/5 lg:h-32 md:w-1/5 md:h-28 sm:w-1/3 sm:h-[5rem] xs:w-1/3 xs:h-[4rem] flex justify-center items-center rounded-sm text-center text-lg px-6 py-4 border-2 border-dashed border-gray-300 dark:text-white dark:border-2 dark:border-dashed dark:border-gray-700">
                            这个地方放project
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
