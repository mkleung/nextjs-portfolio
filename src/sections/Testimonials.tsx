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
    text: "I had the pleasure of working with Michael on my WordPress website, and I couldn't be happier with the results. They consistently delivered on time and handled all issues immediately, ensuring a smooth and stress-free experience. Their attention to detail and commitment to quality truly set them apart. I highly recommend their services to anyone looking for a reliable and skilled web developer",
    avatar: memojiAvatar1,
  },

];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Testimonials"
          title="What do clients say about me!"
          description=""
        />

        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image: linear-gradient(to_right, transparent, black_10%, black_90%, transparent)]">
          <div className="flex flex-none gap-8 ">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="max-w-xs md:p-8 md:max-w-md p-6"
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
                    <div className="text-sm text-white/40">
                      {testimonial.position}
                    </div>
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
