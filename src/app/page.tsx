import homeImg from 'public/home.jpg'
import Hero from '@/components/Hero'
export default function Home() {
  return (
   <Hero imgData={homeImg} imgAlt='car factory' title='Proffesional cloud hosting'/>
  )
}
