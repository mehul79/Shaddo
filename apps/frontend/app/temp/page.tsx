import { VerificationCard } from "@/components/ui/verification-card";

export default function Home(){
    return(
        <div className="h-screen flex justify-center items-center gap-3">
            <VerificationCard title="Morning Run" streakCount={9}/>
            <VerificationCard title="Morning Run"/>
            <VerificationCard title="Morning Run"/>
            <VerificationCard title="Morning Run"/>
        </div>
    )
}