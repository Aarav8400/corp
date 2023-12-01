import scaleImg from 'public/scale.jpg'
import Hero from '@/components/Hero'
export default function Home() {
  return (
   <Hero imgData={scaleImg} imgAlt='scale' title='Scale your app to infinity'/>
  )
}
