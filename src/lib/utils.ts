import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

type FlyAndScaleParams = {
	y?: number;
	x?: number;
	start?: number;
	duration?: number;
};

export const flyAndScale = (
	node: Element,
	params: FlyAndScaleParams = { y: -8, x: 0, start: 0.95, duration: 150 }
): TransitionConfig => {
	const style = getComputedStyle(node);
	const transform = style.transform === "none" ? "" : style.transform;

	const scaleConversion = (
		valueA: number,
		scaleA: [number, number],
		scaleB: [number, number]
	) => {
		const [minA, maxA] = scaleA;
		const [minB, maxB] = scaleB;

		const percentage = (valueA - minA) / (maxA - minA);
		const valueB = percentage * (maxB - minB) + minB;

		return valueB;
	};

	const styleToString = (
		style: Record<string, number | string | undefined>
	): string => {
		return Object.keys(style).reduce((str, key) => {
			if (style[key] === undefined) return str;
			return str + `${key}:${style[key]};`;
		}, "");
	};

	return {
		duration: params.duration ?? 200,
		delay: 0,
		css: (t) => {
			const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
			const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
			const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);

			return styleToString({
				transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
				opacity: t
			});
		},
		easing: cubicOut
	};
};

/**
 * Formats a duration in minutes into ISO 8601 duration format (e.g., PT1H30M).
 * Handles total time strings like "2 hours (chilling)" by extracting the first number.
 * @param duration - Duration in minutes (number) or a string like "X hours/minutes...".
 * @returns ISO 8601 duration string or null if input is invalid.
 */
export function formatDuration(duration: number | string | undefined): string | null {
	if (duration === undefined || duration === null) {
		return null;
	}

	let minutes: number;

	if (typeof duration === 'string') {
		// Try to extract the first number from strings like "2 hours (chilling)"
		const match = duration.match(/\d+/);
		if (match) {
			// Assuming the first number represents the primary duration unit (e.g., hours)
			// This part might need refinement based on how 'totalTime' strings are structured.
			// For "2 hours (chilling)", we'll assume it means 120 minutes for simplicity here.
			// A more robust solution would parse "hours", "minutes" etc.
			const value = parseInt(match[0], 10);
			if (duration.toLowerCase().includes('hour')) {
				minutes = value * 60;
			} else {
				minutes = value; // Assume minutes if no unit specified
			}
		} else {
			return null; // Cannot parse duration from string
		}
	} else {
		minutes = duration;
	}


	if (isNaN(minutes) || minutes <= 0) {
		return null;
	}

	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	let formatted = 'PT';
	if (hours > 0) {
		formatted += `${hours}H`;
	}
	if (remainingMinutes > 0) {
		formatted += `${remainingMinutes}M`;
	}

	// If duration was 0 or invalid, formatted might just be "PT"
	return formatted === 'PT' ? null : formatted;
}