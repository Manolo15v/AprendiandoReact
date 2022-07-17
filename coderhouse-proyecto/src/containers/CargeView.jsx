import DotsAnimation from "../components/Animations/DotsAnimation";
import { BeakerIcon } from '@heroicons/react/outline';

export default function CargeView({ text }) {
    return (
        <main className="bg-gray-50 text-slate-900 h-screen flex items-center">
            <div className="container flex items-end">
                <h1 className="text-5xl font-medium">{ text }</h1>
                <DotsAnimation />
        
                <BeakerIcon className="h-12 w-12 ml-6 pt-1"  />
            </div>
        </main>
    )
  }
  