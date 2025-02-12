import Image from "next/image"
import DataRecoveryForm from "./components/DataRecoveryForm"
import { HardDrive } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
          <HardDrive className="h-12 w-12 text-primary" />          
          </div>
          <h1 className="text-4xl font-bold text-red-600 ">NETCOM SYSTEM <br></br>
            PROFESSIONAL DATA RECOVERY</h1>
          <p className="text-xl text-gray-600">Fast, reliable, and secure data recovery solutions</p>
        </header>
        <DataRecoveryForm />
      </div>
    </div>
  )
}