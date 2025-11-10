import {useState} from "react";
import styled from "styled-components";
import * as Slider from "@radix-ui/react-slider";

const Container = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 32px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
    color: #1f2937;
`;

const PreviewSection = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 0px;
`;

const CheckerboardWrapper = styled.div`
    width: 96px;
    height: 96px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 2px solid #e5e7eb;
    background: linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc),
    linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
`;

const ColorPreview = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: ${props => props.color};
`;

const ColorValues = styled.div`
    flex: 1;
`;

const ColorValue = styled.div`
    font-size: 13px;
    font-family: monospace;
    color: #4b5563;
    margin-bottom: 4px;
`;

const SlidersContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const SliderGroup = styled.div`
    width: 100%;
`;

const Label = styled.label`
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    margin-bottom: 8px;
`;

const SliderRoot = styled(Slider.Root)`
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    touch-action: none;
    width: 100%;
    height: 32px;
`;



const SliderTrack = styled(Slider.Track)<{ background?: string }>`
    position: relative;
    flex-grow: 1;
    border-radius: 9999px;
    height: 12px;
    overflow: hidden;
    background: ${props => props.background};
`;

const SliderRange = styled(Slider.Range)`
    position: absolute;
    height: 100%;
`;

const SliderThumb = styled(Slider.Thumb)`
    display: block;
    width: 20px;
    height: 20px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    border: 2px solid #d1d5db;
    cursor: pointer;

    &:hover {
        border-color: #9ca3af;
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    }
`;

export default function AnotherColorPicker() {
    const [hue, setHue] = useState(180);
    const [saturation, setSaturation] = useState(50);
    const [lightness, setLightness] = useState(50);
    const [opacity, setOpacity] = useState(100);

    // Helper function to convert HSL to RGB for opacity gradient
    const hslToRgb = (h: number, s: number, l: number) => {
        s = s / 100;
        l = l / 100;
        const k = (n: number) => (n + h / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
        return [
            Math.round(255 * f(0)),
            Math.round(255 * f(8)),
            Math.round(255 * f(4))
        ];
    };

    const [r, g, b] = hslToRgb(hue, saturation, lightness);
    const currentColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    const currentRgba = `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;

    // Gradient backgrounds for each slider
    const hueGradient = 'linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))';

    const saturationGradient = `linear-gradient(to right, hsl(${hue}, 0%, ${lightness}%), hsl(${hue}, 100%, ${lightness}%))`;

    const lightnessGradient = `linear-gradient(to right, hsl(${hue}, ${saturation}%, 0%), hsl(${hue}, ${saturation}%, 50%), hsl(${hue}, ${saturation}%, 100%))`;

    const opacityBackground = `
    linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0), rgba(${r}, ${g}, ${b}, 1)),
    linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc),
    linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)
  `;
    const opacityBackgroundSize = 'auto, 10px 10px, 10px 10px';
    const opacityBackgroundPosition = '0 0, 0 0, 5px 5px';

    return (
        <Container>
            <Title>Color Picker</Title>

            <PreviewSection>
                <CheckerboardWrapper>
                    <ColorPreview color={currentRgba}/>
                </CheckerboardWrapper>
                <ColorValues>
                    <ColorValue>{currentColor}</ColorValue>
                    <ColorValue>{currentRgba}</ColorValue>
                    <p>remove the jankyness ........... foooo barrrrrr .........</p>
                </ColorValues>
            </PreviewSection>

            <SlidersContainer>
                <SliderGroup>
                    <Label>Hue: {hue}°</Label>
                    <SliderRoot
                        value={[hue]}
                        onValueChange={([value]) => setHue(value)}
                        max={360}
                        step={1}
                    >
                        <SliderTrack style={{ background: hueGradient }}>
                            <SliderRange/>
                        </SliderTrack>
                        <SliderThumb/>
                    </SliderRoot>
                </SliderGroup>

                <SliderGroup>
                    <Label>Saturation: {saturation}%</Label>
                    <SliderRoot
                        value={[saturation]}
                        onValueChange={([value]) => setSaturation(value)}
                        max={100}
                        step={1}
                    >
                        <SliderTrack style={{ background:saturationGradient}}>
                            <SliderRange/>
                        </SliderTrack>
                        <SliderThumb/>
                    </SliderRoot>
                </SliderGroup>

                <SliderGroup>
                    <Label>Lightness: {lightness}%</Label>
                    <SliderRoot
                        value={[lightness]}
                        onValueChange={([value]) => setLightness(value)}
                        max={100}
                        step={1}
                    >
                        <SliderTrack style={{ background:lightnessGradient}}>
                            <SliderRange/>
                        </SliderTrack>
                        <SliderThumb/>
                    </SliderRoot>
                </SliderGroup>

                <SliderGroup>
                    <Label>Opacity: {opacity}%</Label>
                    <SliderRoot
                        value={[opacity]}
                        onValueChange={([value]) => setOpacity(value)}
                        max={100}
                        step={1}
                    >
                        <SliderTrack

                            style={{
                                background:opacityBackground,
                                backgroundSize: opacityBackgroundSize,
                                backgroundPosition: opacityBackgroundPosition
                            }}
                        >
                            <SliderRange/>
                        </SliderTrack>
                        <SliderThumb/>
                    </SliderRoot>
                </SliderGroup>
            </SlidersContainer>
        </Container>
    );
}