'use client'

import React, { useState } from 'react'
import ButtonSelect from './button-select'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const colorOptions = [
  { value: 'red', label: 'Red' },
  { value: 'blue', label: 'Blue' },
  { value: 'green', label: 'Green' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'purple', label: 'Purple' },
]

const sizeOptions = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
]

export function ButtonSelectExampleComponent() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].value)
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0].value)

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Button Select Example</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Select a Color</h3>
          <ButtonSelect
            options={colorOptions}
            value={selectedColor}
            onChange={setSelectedColor}
          />
          <p className="text-sm text-muted-foreground">Selected color: {selectedColor}</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Select a Size</h3>
          <ButtonSelect
            options={sizeOptions}
            value={selectedSize}
            onChange={setSelectedSize}
          />
          <p className="text-sm text-muted-foreground">Selected size: {selectedSize}</p>
        </div>
      </CardContent>
    </Card>
  )
}