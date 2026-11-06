// The dot row the original script builds under each mobile carousel.
// Rendered here as plain markup with the same classes and aria labels.
export default function CarouselDots({
  count,
  active,
  onDotClick,
  hidden,
}: {
  count: number;
  active: number;
  onDotClick: (index: number) => void;
  hidden?: boolean;
}) {
  if (count < 2) {
    return (
      <div className="carousel-dots" aria-label="Carousel navigation" hidden />
    );
  }
  return (
    <div className="carousel-dots" aria-label="Carousel navigation" hidden={hidden}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          className={'carousel-dot' + (i === active ? ' active' : '')}
          aria-label={'Go to item ' + (i + 1) + ' of ' + count}
          onClick={() => onDotClick(i)}
        />
      ))}
    </div>
  );
}
