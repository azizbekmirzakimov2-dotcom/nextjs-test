import Hero from "./components/Hero";
import Header from "./widgets/Header";


export default async function Home() {
  const res=await fetch("http://localhost:8000/mahsulotlar")
  const mahsulotlar=await res.json()
  return (
    <main>
      <Header />
      <Hero />
      
    </main>
  )
}
