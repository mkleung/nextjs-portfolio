import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Cleints"
          title="What Clients Say about me!"
          description="test"
        />

        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)]">
          <div className="flex flex-none gap-8 ">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="max-w-xs md:p-8 md:max-w-md"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center flex-shrink-0 ">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="max-height-full"
                    />
                  </div>

                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/40">{testimonial.position}</div>
                  </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">
                    {testimonial.text}
                  </p>
                
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
