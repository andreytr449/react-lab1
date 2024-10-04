import Container from "@/components/shared/general/Container";
import Piano from "@/components/shared/piano/Piano";

export default function PianoPage(){
    return (
        <Container>
            <div className='bg-white rounded-lg mt-40 w-full h-[450px] px-1 py-1'>
                <Piano />
            </div>
        </Container>
    )
}