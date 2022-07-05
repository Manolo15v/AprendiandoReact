import DotsAnimation from "../components/Animations/DotsAnimation";
import PotionWidget from "../components/Widgets/PotionWidget";

export default function CargeView({ text }) {
    return (
        <main className="bg-gray-50 text-slate-900 h-screen flex items-center">
            <div className="container flex items-end">
                <h1 className="text-5xl font-medium">{ text }</h1>
                <DotsAnimation />
        
                <PotionWidget  />
            </div>
        </main>
    )
  }
  