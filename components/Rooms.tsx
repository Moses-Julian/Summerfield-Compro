import clsx from 'clsx';
import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { Room1, Room2 } from '@/public/photos';

export type RoomsProps = {
	className?: string;
};

const Rooms: FC<RoomsProps> = ({ className }: RoomsProps) => {
	return (
		<div
			className={clsx(
				'grid grid-cols-2 gap-8 justify-center items-stretch px-56',
				className
			)}
			id="rooms"
		>
			<div className="flex flex-col gap-5 w-full p-5 col-span-1 z-[5] rounded-3xl shadow-lg">
				<span className="text-xl font-semibold">Summer One</span>

				<Carousel
					showArrows={true}
					showIndicators={true}
					infiniteLoop={true}
					autoPlay={true}
					dynamicHeight={false}
					interval={5000}
					className="max-w-full max-h-[350px]"
				>
					{Room1.images.map((image, index) => (
						<div key={index} className="max-w-full max-h-[350px]">
							<Image
								src={image}
								className="rounded-3xl aspect-square max-w-full max-h-[350px]"
								alt=""
								width={1000}
								height={350}
							/>
						</div>
					))}
				</Carousel>

				<div className="text-lg text-justify">
					<span className="text-xl font-semibold">Summer One</span> is located
					on the 2nd floor. It has a private balcony and an outdoor bathtub. It
					has Free Wifi and a TV. The room is equipped with a mini fridge and a
					water kettle. The room has a size of 35m². The room has a hairdryer
					and an air conditioner.
				</div>
			</div>

			<div className="flex flex-col gap-5 w-full p-5 col-span-1 z-[5] rounded-3xl shadow-lg">
				<span className="text-xl font-semibold">Summer Two</span>

				<Carousel
					showArrows={true}
					showIndicators={true}
					infiniteLoop={true}
					autoPlay={true}
					dynamicHeight={false}
					interval={5000}
					className="max-w-full max-h-[350px]"
				>
					{Room2.images.map((image, index) => (
						<div key={index} className="max-w-full max-h-[350px]">
							<Image
								src={image}
								className="rounded-3xl aspect-square max-w-full max-h-[350px]"
								alt=""
								width={1000}
								height={350}
							/>
						</div>
					))}
				</Carousel>

				<div className="text-lg text-justify">
					<span className="text-xl font-semibold">Summer Two</span> is located
					on the 3rd floor. It has 2 private balconies. It has Free Wifi and a
					TV. The room is equipped with a mini fridge and a water kettle. The
					room has a size of 28m². The room has a hairdryer and an air
					conditioner.
				</div>
			</div>
		</div>
	);
};

export default Rooms;