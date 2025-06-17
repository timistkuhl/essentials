import units from "@/app/assets/res/units";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Option } from "@rn-primitives/select";
import { ArrowRightLeft } from "lucide-react-native";
import { useState } from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";

const categories = units;

export default function UnitConverter() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedUnitA, setSelectedUnitA] = useState(selectedCategory.Minor[0]);
  const [selectedUnitB, setSelectedUnitB] = useState(selectedCategory.Minor[1]);
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");

  const onChangeCategory = (value: Option) => {
    const category = categories.find(
      (cat) => cat.Major.toLowerCase() === value?.value
    );
    setSelectedCategory(category);
  };

  const onChangeUnitA = (value: Option) => {
    const unit = selectedCategory.Minor.find(
      (unit) => unit.Name.toLowerCase() === value?.value
    );
    setSelectedUnitA(unit);
    onChangeTextB(textB);
  };

  const onChangeUnitB = (value: Option) => {
    const unit = selectedCategory.Minor.find(
      (unit) => unit.Name.toLowerCase() === value?.value
    );
    setSelectedUnitB(unit);
    onChangeTextA(textA);
  };

  const onChangeTextA = (text: string) => {
    setTextA(text);
    const aToBase = selectedUnitA.toOther(parseFloat(text));
    if (isNaN(aToBase)) {
      setTextB("");
      return;
    }
    const baseToB = selectedUnitB.toBase(aToBase);
    setTextB(
      Math.abs(baseToB) >= 1e4 || Math.abs(baseToB) <= 1e-4
        ? baseToB.toExponential(
            baseToB.toString().length > 4 ? 4 : baseToB.toString().length
          )
        : baseToB.toString()
    );
  };

  const onChangeTextB = (text: string) => {
    setTextB(text);
    let bToBase = selectedUnitB.toOther(parseFloat(text));
    if (isNaN(bToBase)) {
      setTextA("");
      return;
    }
    let baseToA = selectedUnitA.toBase(bToBase);
    setTextA(
      Math.abs(baseToA) >= 1e4 || Math.abs(baseToA) <= 1e-4
        ? baseToA.toExponential(
            baseToA.toString().length > 4 ? 4 : baseToA.toString().length
          )
        : baseToA.toString()
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 items-center justify-start pt-8 bg-background">
        <Text className="relative text-foreground m-1/2 mt-14 text-5xl font-bold">
          Unit Conversion
        </Text>

        {/* Select a category */}
        <View className="w-64 mt-16">
          <Text className="text-foreground text-2xl self-start mb-2">
            Category
          </Text>
          <Select
            defaultValue={{
              value: categories[0].Major.toLowerCase(),
              label: categories[0].Major,
            }}
            onValueChange={(value) => {
              onChangeCategory(value);
            }}
          >
            <SelectTrigger className="w-64">
              <SelectValue
                className="text-foreground text-sm native:text-lg"
                placeholder="Select a Category"
              />
            </SelectTrigger>
            <SelectContent className="w-64 max-h-64 overflow-hidden">
              <SelectGroup>
                <SelectLabel>Categories</SelectLabel>
                <SelectSeparator className="mt-0 mb-1" />
                {categories
                  .sort((a, b) => a.Major.localeCompare(b.Major))
                  .map((category) => (
                    <SelectItem
                      key={category.Major}
                      value={category.Major.toLowerCase()}
                      label={category.Major}
                    />
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Separator className="w-64 mt-6" />
        </View>

        {/* Select Unit A */}
        <View className="w-64 mt-16 mb-8">
          <Text className="text-foreground text-2xl self-start mb-2">
            Unit 1
          </Text>
          <Select
            key={`unit-a-${selectedCategory.Major}`}
            defaultValue={{
              value: selectedCategory.Minor[0].Name.toLowerCase(),
              label: selectedCategory.Minor[0].Name,
            }}
            onValueChange={(value) => {
              onChangeUnitA(value);
            }}
          >
            <SelectTrigger className="w-64">
              <SelectValue
                className="text-foreground text-sm native:text-lg"
                placeholder="Select a fruit"
              />
            </SelectTrigger>
            <SelectContent className="w-64">
              <SelectGroup>
                <SelectLabel>Units</SelectLabel>
                <SelectSeparator className="mt-0 mb-1" />
                {selectedCategory?.Minor.sort((a, b) =>
                  a.Name.localeCompare(b.Name)
                ).map((unit) => (
                  <SelectItem
                    key={unit.Name}
                    value={unit.Name.toLowerCase()}
                    label={unit.Name}
                  />
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Input
            className="mt-6 w-max"
            placeholder="Write some stuff..."
            value={textA}
            onChangeText={onChangeTextA}
            aria-labelledby="inputLabel"
            aria-errormessage="inputError"
            keyboardType="numeric"
          />
        </View>

        <View className="rotate-90">
          <ArrowRightLeft color="#ffffff" />
        </View>

        {/* Select Unit B */}
        <View className="w-64 mt-8">
          <Text className="text-foreground text-2xl self-start mb-2">
            Unit 2
          </Text>
          <Select
            key={`unit-b-${selectedCategory.Major}`}
            defaultValue={{
              value: selectedCategory.Minor[1].Name.toLowerCase(),
              label: selectedCategory.Minor[1].Name,
            }}
            onValueChange={(value) => {
              onChangeUnitB(value);
            }}
          >
            <SelectTrigger className="w-64">
              <SelectValue
                className="text-foreground text-sm native:text-lg"
                placeholder="Select a fruit"
              />
            </SelectTrigger>
            <SelectContent className="w-64">
              <SelectGroup>
                <SelectLabel>Units</SelectLabel>
                <SelectSeparator className="mt-0 mb-1" />
                {selectedCategory?.Minor.sort((a, b) =>
                  a.Name.localeCompare(b.Name)
                ).map((unit) => (
                  <SelectItem
                    key={unit.Name}
                    value={unit.Name.toLowerCase()}
                    label={unit.Name}
                  />
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Input
            className="mt-6 w-max"
            placeholder="Write some stuff..."
            value={textB}
            onChangeText={onChangeTextB}
            aria-labelledby="inputLabel"
            aria-errormessage="inputError"
            keyboardType="numeric"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
