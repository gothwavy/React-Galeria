import { useState } from "react";

export default function Galeria() {
  const [imagens, setImagens] = useState([
    'https://avatars.githubusercontent.com/u/85910379?v=4'
  ])

  const adicionarImagem = () => {
    if (imagens.length < 28){
      setImagens([...imagens, 'https://avatars.githubusercontent.com/u/85910379?v=4'])
    }
  }

  return (
    <div className="container">
      <h2>Galeria de imagens</h2>
      <div className="boxImagens">
        {imagens.map((imagem, index) => (
          <img key={index} src={imagem} alt={`imagem${index + 1}`} />
        ))}
      </div>
      <button onClick={adicionarImagem}>Adicionar imagem</button>
    </div >
  )
}