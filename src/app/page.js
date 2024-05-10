import './globals.css'
import PhotoGallery from '@/components/Gallery/PhotoGallery'
import Banner from '@/components/Banner/Banner'
import banner from '../../assets/hero-banner.jpg'
import Info from '@/components/Info/Info'
import InstituteContent from '@/components/Content/InstituteContent'
import Statistics from '@/components/Statistics/Statistics'
import Application from '@/components/Application/Application'
import AcademicShifts from '@/components/Shift/AcademicShifts'

export default function Home() {
  return (
    <main>
      <Banner bg={banner} title="Welcome to South Asian Applied Nursing College, Chattogram" />
      <InstituteContent />
      <Statistics />
      <Info />
      <AcademicShifts />
      <Application />
      <PhotoGallery />
    </main>
  )
}
