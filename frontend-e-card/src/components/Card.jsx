import SocialsButtons from "./SocialsButton";

export default function Card({ card }) {
    const { name, description, interests, gituser, imgUrl, socials} = card;

    const socialButtons = socials.map((social) => {
        return (
            <SocialsButtons key={social._id}><a href={social.url}>{social.social}</a></SocialsButtons>
        )
    })
    socialButtons.unshift((<SocialsButtons key={"github"}><a href={`https://github.com/${gituser}`}>Github</a></SocialsButtons>))

    return (
            <div className="flex font-sans w-[500px] shadow-lg rounded-xl ml-5 mt-5 bg-slate-800 ">
                <div className="flex-none w-48 rounded-xl relative">
                    <img src={imgUrl} alt="profile picture" className="object-cover rounded-l-xl w-full h-full "/>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent rounded-l-xl"></div>
                    <div className="absolute bottom-1 text-sm text-slate-200">
                    <div className="flex w-48 justify-center">
                        <a href={`https://github.com/${gituser}`}>&#64;{gituser}</a>
                    </div>
                    </div>
                </div>

                <div className="flex-auto py-3  px-6">
                    <h1 className="flex left-0 text-xl font-semibold text-slate-100 border-b-2 border-slate-700">{name}</h1>
                    <div className="flex left-0 text-md font-semibold text-slate-300 ">{description}</div>
                    <div className=" text-md text-slate-300"><b className="text-sm">Interests:</b> {interests}</div>
                    <div className="flex-wrap">
                        {socialButtons}
                    </div>
                </div>
            </div>
    )
}

