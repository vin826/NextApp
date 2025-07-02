"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const slideData = [
	{
		title: "Mystic Mountains",
		button: "Explore Component",
		src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop",
	},
	{
		title: "Urban Dreams",
		button: "Explore Component",
		src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop",
	},
	{
		title: "Neon Nights",
		button: "Explore Component",
		src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop",
	},
	{
		title: "Desert Whispers",
		button: "Explore Component",
		src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop",
	},
];

export default function CarouselDemo() {
	return (
		<div className="w-full max-w-xl mx-auto py-20">
			<Carousel>
				<CarouselContent>
					{slideData.map((slide, idx) => (
						<CarouselItem key={idx}>
							<div className="container mx-auto p-4">
								<div className="relative aspect-video rounded-xl overflow-hidden">
									<img
										src={slide.src}
										alt={slide.title}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
										<h2 className="text-white text-2xl font-bold">{slide.title}</h2>
										<button className="mt-4 px-4 py-2 bg-white text-black rounded-lg shadow">
											{slide.button}
										</button>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}