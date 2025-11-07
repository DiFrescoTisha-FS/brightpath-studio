'use client'

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
// NOTE: We no longer need to import 'cva' or 'VariantProps' directly here
// from 'class-variance-authority', as we use the type/constant from the utility file.
// import { type VariantProps } from "class-variance-authority" 

// IMPORT the constant and its related type from the utility file
import { buttonVariants, type ButtonVariantProps } from "./button-variants" 

import { cn } from "@/lib/utils"

// This interface uses the imported ButtonVariantProps type, which is correct
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        // The imported 'buttonVariants' constant is used here:
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// Only export the component 'Button'. This resolves the Fast Refresh error.
export { Button }