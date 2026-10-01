import Globe from "../assets/globe.png"

export default function Header () {
  return (
    <header>
      <img src={Globe} alt="globe image"/>
      <h1>my travel journal.</h1>
    </header>
  )
}