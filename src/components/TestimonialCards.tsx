'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      quote:
        'Joining this music school helped me deeply understand rhythm and melody, and I discovered my unique musical style. The instructors here are truly exceptional!',
      name: 'Aarav Sharma',
      title: 'Tabla Student',
    },
    {
      quote:
        "The environment and support at this school are outstanding. I have grown not just as a pianist but also as a confident performer, thanks to their holistic approach.",
      name: 'Meera Iyer',
      title: 'Piano Student',
    },
    {
      quote:
        "This school provided me with the right guidance and confidence to take my singing to a professional level. The personalized coaching experience has been incredible!",
      name: 'Kabir Verma',
      title: 'Hindustani Vocal Student',
    },
    {
      quote:
        'As a violinist, finding the right mentor is not easy, but this school connected me with a teacher who truly understands my aspirations and challenges.',
      name: 'Ananya Mukherjee',
      title: 'Violin Student',
    },
    {
      quote:
        'The music production courses here have given me deep insights into the technical and creative aspects of producing music. Highly recommended for aspiring music producers!',
      name: 'Rohan Nair',
      title: 'Music Production Student',
    },
  ];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Our Musical Journey: Voices of Success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials;



