
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface AttributeFiltersProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  intensityLevel: number[];
  setIntensityLevel: (levels: number[]) => void;
  sweetnessLevel: number[];
  setSweetnessLevel: (levels: number[]) => void;
}

const AttributeFilters: React.FC<AttributeFiltersProps> = ({
  priceRange,
  setPriceRange,
  intensityLevel,
  setIntensityLevel,
  sweetnessLevel,
  setSweetnessLevel
}) => {
  // Handler for price range slider
  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  // Handler for intensity checkboxes
  const handleIntensityChange = (level: number) => {
    if (intensityLevel.includes(level)) {
      setIntensityLevel(intensityLevel.filter(l => l !== level));
    } else {
      setIntensityLevel([...intensityLevel, level]);
    }
  };

  // Handler for sweetness checkboxes
  const handleSweetnessChange = (level: number) => {
    if (sweetnessLevel.includes(level)) {
      setSweetnessLevel(sweetnessLevel.filter(l => l !== level));
    } else {
      setSweetnessLevel([...sweetnessLevel, level]);
    }
  };

  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-playfair text-xl font-bold mb-4">Refine</h3>
      
      <Accordion type="single" collapsible defaultValue="price" className="w-full">
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider 
                defaultValue={[10, 50]} 
                max={100} 
                step={5} 
                value={[priceRange[0], priceRange[1]]} 
                onValueChange={handlePriceChange}
                className="my-6"
              />
              <div className="flex justify-between items-center">
                <span className="font-medium">${priceRange[0]}</span>
                <span className="font-medium">${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="intensity">
          <AccordionTrigger>Intensity Level</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {[1, 2, 3, 4, 5].map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`intensity-${level}`}
                    checked={intensityLevel.includes(level)}
                    onCheckedChange={() => handleIntensityChange(level)}
                  />
                  <Label htmlFor={`intensity-${level}`} className="flex items-center space-x-2 cursor-pointer">
                    <span>{level} {level === 1 ? 'star' : 'stars'}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`h-2 w-2 rounded-full ${i < level ? 'bg-spice-black' : 'bg-gray-200'} mr-1`}
                        />
                      ))}
                    </div>
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="sweetness">
          <AccordionTrigger>Sweetness Level</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              {[1, 2, 3, 4, 5].map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`sweetness-${level}`}
                    checked={sweetnessLevel.includes(level)}
                    onCheckedChange={() => handleSweetnessChange(level)}
                  />
                  <Label htmlFor={`sweetness-${level}`} className="flex items-center space-x-2 cursor-pointer">
                    <span>{level} {level === 1 ? 'star' : 'stars'}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          className={`h-2 w-2 rounded-full ${i < level ? 'bg-spice-pink-dark' : 'bg-gray-200'} mr-1`}
                        />
                      ))}
                    </div>
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AttributeFilters;
