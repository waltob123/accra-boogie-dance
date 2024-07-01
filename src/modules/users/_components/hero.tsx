/* eslint-disable @typescript-eslint/no-explicit-any */
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import { useCallback, useState } from 'react';
import {
	NextButton,
	PrevButton,
	usePrevNextButtons,
} from './embla_carousel_btn';
import { cn } from '@/lib/utils';
import { Select, SelectItem } from '@nextui-org/react';

const HeroComponent = () => {
	const [value, setValue] = useState('ABK22');

	const OPTIONS: EmblaOptionsType = { loop: true };
	const SLIDES = Array.from(imageArray[value]);

	const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
		Autoplay({ delay: 3000 }),
	]);

	const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
		const autoplay = emblaApi?.plugins()?.autoplay;
		if (!autoplay) return;

		const resetOrStop =
			autoplay.options.stopOnInteraction === false
				? autoplay.reset
				: autoplay.stop;

		resetOrStop();
	}, []);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi, onNavButtonClick);

	return (
		<section id="home" className="relative  md:p-12 p-6">
			<div className="flex flex-col justify-center items-center">
				<img src="/text.svg" alt="" className="w-52 mt-5" />
				<div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto mt-5">
					<Select
						variant={'faded'}
						size="md"
						aria-label="*"
						value={value}
						label={'Categories'}
						labelPlacement={'outside'}
						selectionMode={'single'}
						selectedKeys={[value]}
						color="primary"
						onChange={(e) => setValue(e.target.value)}
						radius="sm"
						classNames={{
							trigger: cn(
								`data-[hover=true]:shadow-none shadow-none border  max-w-xs bg-white mb-4 mx-auto border-black/30  text-[12px] h-12`,
							),
							label: 'text-xs uppercase text-white',
							popoverContent: 'rounded-md',
						}}>
						{['ABK22', 'ABK23']?.map((option: any) => (
							<SelectItem
								classNames={{
									base: 'rounded-md',
								}}
								key={option?.value || option}
								value={option?.value || option}>
								{option?.label || option}
							</SelectItem>
						))}
					</Select>

					<section className="embla w-full">
						<div className="overflow-hidden" ref={emblaRef}>
							<div className="flex  w-full">
								{SLIDES.map((index) => (
									<div
										className="embla__slide rounded-lg border h-[20rem] md:h-[40rem] border-white/40 overflow-hidden"
										key={index}>
										<img
											src={index}
											alt=""
											className="object-cover w-full h-full"
										/>
									</div>
								))}
							</div>
						</div>

						<div className="flex justify-between items-center w-full mt-2">
							<div className="items-center flex">
								<PrevButton
									onClick={onPrevButtonClick}
									disabled={prevBtnDisabled}
								/>
								<NextButton
									onClick={onNextButtonClick}
									disabled={nextBtnDisabled}
								/>
							</div>

							{/* <div className="flex items-center gap-x-5">
								{scrollSnaps.map((_, index) => (
									<DotButton
										key={index}
										onClick={() => onDotButtonClick(index)}
										className={cn(
											index === selectedIndex ? ' bg-red-500' : 'bg-white',
											'w-3 h-3 rounded-full ',
										)}
									/>
								))}
							</div> */}
						</div>
					</section>
				</div>
			</div>
		</section>
	);
};

export default HeroComponent;

const imageArray: Record<string, Array<string>> = {
	ABK22: [
		'/ABK22/ABK22_48.webp',
		'/ABK22/ABK22 83.webp',
		'/ABK22/ABK22 90.webp',
		'/ABK22/ABK22 92.webp',
		'/ABK22/ABK22 110.webp',
		'/ABK22/ABK22 137.webp',
		'/ABK22/ABK22 147.webp',
		'/ABK22/ABK22 152.webp',
		'/ABK22/ABK22 164.webp',
		'/ABK22/ABK22 165.webp',
		'/ABK22/ABK22 166.webp',
		'/ABK22/ABK22 181.webp',
		'/ABK22/ABK22 202.webp',
		'/ABK22/ABK22 207.webp',
		'/ABK22/ABK22 208.webp',
		'/ABK22/ABK22 229.webp',
		'/ABK22/ABK22 233.webp',
		'/ABK22/ABK22 241.webp',
		'/ABK22/ABK22 263.webp',
		'/ABK22/ABK22 287.webp',
		'/ABK22/ABK22 291.webp',
		'/ABK22/ABK22 292.webp',
		'/ABK22/ABK22 313.webp',
		'/ABK22/ABK22 317.webp',
		'/ABK22/ABK22 335.webp',
		'/ABK22/ABK22 336.webp',
		'/ABK22/ABK22 337.webp',
		'/ABK22/ABK22 341.webp',
		'/ABK22/ABK22 346.webp',
		'/ABK22/ABK22 347.webp',
	],
	ABK23: [
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_8.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_10.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_18.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_24.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_30.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_39.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_73.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_74.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_89.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_96.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_107.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_122.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_123.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_145.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_181.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_182.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_183.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_184.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_207.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_222.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_225.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_227.webp',
		'/ABK23/ACCRA_S BOOGIE KING 23 FIRST LOVE CHURCH DAG HEWARD-MILLS_232.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_14.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_16.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_27.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_28.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_33.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_36.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_40.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_48.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_53.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_54.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_55.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_56.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_68.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_71.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_74.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_76.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_83.webp',
		'/ABK23/ACCRA_S BOOGIE KING FIRST LOVE CHURCH  DAG HEWARD-MILLS_85.webp',
	],
};
