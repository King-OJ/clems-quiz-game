import React from 'react';

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])



    function getRandomPics() {
        const randomPic = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomPic].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        })
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme (x => {
            return {
                ...x,
                [name]: value
            }
        })
    }

    return (
        <section>
            <div className="form">
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Top text"
                    name = "topText"
                    value = {meme.topText}
                    onChange={handleChange}
                ></input>
                
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Bottom text"
                    name = "bottomText"
                    value ={meme.bottomText}
                    onChange={handleChange}
                ></input>

                <button className="form--btn" onClick={getRandomPics}>Get a New Image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </section>
    )
}

