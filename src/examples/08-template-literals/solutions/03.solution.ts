/**
 * Stwórz typ CSSUnit reprezentujący jednostki CSS:
 * "px", "em", "rem", "%". Następnie utwórz typ CSSValue,
 * który będzie łączył liczbę (jako string) z jedną z tych jednostek.
 */
type CSSUnit = 'px' | 'em' | 'rem' | '%'; // change me
type CSSValue = `${number}${CSSUnit}`; // change me
// type CSSValue = `${^/[0-9]+/ig}`; // change me

// example usage:
const fontSize: CSSValue = '16px'; // Poprawne
const margin: CSSValue = '1.5rem'; // Poprawne

// @ts-expect-error
const padding: CSSValue = '10'; // Błąd - brak jednostki
