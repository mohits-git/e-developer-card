import { useState, useEffect } from "react";
import Input from "./Input";
import PlusButton from "./PlusButton";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function CreateCard() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [interests, setInterests] = useState('');
    const [gituser, setGituser] = useState('');
    const [socials, setSocials] = useState([]);
    const [imgUrl, setImgUrl] = useState('https://avatars.githubusercontent.com/u/9919?s=280&v=4')

    useEffect(() => {
        if (!gituser?.length) return;
        const timeOutId = setTimeout(async () => {
            const res = await fetch(`https://api.github.com/users/${gituser}`);
            const data = await res.json();
            setImgUrl(data.avatar_url);
        }, 350)
        return () => clearTimeout(timeOutId);
    }, [gituser])

    const navigate = useNavigate();

    const card = { name, description, interests, gituser, socials, imgUrl };

    const submitCard = async () => {
        if (name === "" || gituser === "" || description === "" || interests === "") return;
        await fetch('https://e-developer-card.onrender.com/api/card', {
            method: "POST",
            body: JSON.stringify({ card }),
            headers: { "Content-type": 'application/json' }
        })
        navigate('/')
    }

    return (
        <div className="my-5 flex justify-center items-center">
            <div className="flex-col justify-center items-center">
                <div className="flex justify-center w-[600px] border-2 rounded-lg border-black/30">
                    <div className="w-full p-2" action="">
                        <h1 className="ml-1 font-semibold text-lg text-slate-700">Add your card</h1>
                        <Input type='text' placeholder='Your Name...' value={name} handleChange={(e) => setName(e.target.value)} />
                        <Input type='text' placeholder='Description: Full Stack/Frontend/Backend/etc....' value={description} handleChange={(e) => setDescription(e.target.value)} />
                        <Input type='text' placeholder='Your Interests...' value={interests} handleChange={(e) => setInterests(e.target.value)} />
                        <Input type='text' placeholder='Your github username... (card image will be same as github avatar)' value={gituser} handleChange={(e) => setGituser(e.target.value)} />
                        <div className="my-3">
                            Socials: <PlusButton onClick={() => setSocials([...socials, { social: "", url: "" }])}>Add</PlusButton>
                            {socials.map((social, index) => {
                                return (
                                    <div key={index} className="flex justify-between">
                                        <div className="w-[200px]">
                                            <Input
                                                type='text'
                                                placeholder='Platform name... '
                                                value={social.social}
                                                handleChange={(e) => setSocials(
                                                    socials.map((s, i) => (i === index ? { ...s, social: e.target.value } : s))
                                                )} />
                                        </div>
                                        <div className="w-[400px] ml-2">
                                            <Input
                                                type='text'
                                                placeholder='Profile url...'
                                                value={social.url}
                                                handleChange={(e) => setSocials(
                                                    socials.map(
                                                        (s, i) => (i === index ? { ...s, url: e.target.value } : s)
                                                    )
                                                )} />
                                        </div>
                                    </div>
                                )
                            })}
                            {socials.length === 0 ? "" : <div className="mt-2">
                                <PlusButton onClick={() => (
                                    setSocials(socials.filter(
                                        (social, index) => (index === socials.length - 1 ? false : true)
                                    ))
                                )} >remove</PlusButton>
                            </div>}
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={() => submitCard()}
                                type="button"
                                className="w-full inline-flex bg-black justify-center items-center rounded-xl px-3 py-4 text-sm font-semibold text-white hover:bg-[#111930]"
                            >Add Your E-Card</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center w-[600px] rounded-lg">
                    <Card card={card} />
                </div>
            </div>
        </div>
    )
}
