// This is a simplified version - you can install the full toast component from shadcn/ui
import { useState } from "react"

type ToastProps = {
  title: string
  description: string
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = (props: ToastProps) => {
    setToasts((prev) => [...prev, props])
    // Auto dismiss after 3 seconds
    setTimeout(() => {
      setToasts((prev) => prev.slice(1))
    }, 3000)
  }

  return { toast, toasts }
}

export { useToast as toast }