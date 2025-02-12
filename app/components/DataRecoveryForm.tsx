"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { generateJobNumber } from "../utils/jobNumberGenerator"
import { sendNotification } from "../utils/notificationSender"

export default function DataRecoveryForm() {
  const [formData, setFormData] = useState({
    customer: "",
    date: "",
    mobileNo: "",
    deviceDescription: "",
    storageType: "",
    deviceType: "",
    make: "",
    model: "",
    serialNo: "",
    partitions: "",
    problem: "",
    importantData: "",
    quantity: "",
    serviceCharge: "",
    remarks: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const jobNo = generateJobNumber()
    await sendNotification(jobNo, formData.mobileNo)
    // Here you would typically save the form data to a database  -- open csv append csv and save csv
    console.log("Form submitted:", { jobNo, ...formData })
    // Reset form or show success message
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Data Recovery Request</CardTitle>
        <CardDescription>Please fill out the form below to initiate a data recovery request.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="from">Customer Details:</Label>
              <Input id="from" name="from" value={formData.form} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" type="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobileNo">Mobile No</Label>
              <Input id="mobileNo" name="mobileNo" value={formData.mobileNo} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="deviceDescription">Description of the device</Label>
              <Input
                id="deviceDescription"
                name="deviceDescription"
                value={formData.deviceDescription}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="storageType">Device Type</Label>
              <Select
                name="storageType"
                onValueChange={(value) => handleChange({ target: { name: "storageType", value } } as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select storage type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hdd">HDD</SelectItem>
                  <SelectItem value="ssd">SSD </SelectItem>
                  <SelectItem value="m.2/nvme">M.2/NVME</SelectItem>
                  <SelectItem value="pendrive">PenDrive</SelectItem>
                  <SelectItem value="sd card">SD Card</SelectItem>
                  <SelectItem value="server">Server</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="deviceType">Device Type</Label>
              <Select
                name="deviceType"
                onValueChange={(value) => handleChange({ target: { name: "deviceType", value } } as any)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select device type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="desktop">Desktop</SelectItem>
                  <SelectItem value="notebook">Notebook</SelectItem>
                  <SelectItem value="usb">USB</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="make">Make</Label>
              <Input id="make" name="make" value={formData.make} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="model">Model</Label>
              <Input id="model" name="model" value={formData.model} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="serialNo">Serial No</Label>
              <Input id="serialNo" name="serialNo" value={formData.serialNo} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="partitions">No of partitions</Label>
              <Input
                id="partitions"
                name="partitions"
                type="number"
                value={formData.partitions}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="problem">Problem</Label>
              <Textarea id="problem" name="problem" value={formData.problem} onChange={handleChange} required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="importantData">Important Data to be recovered</Label>
              <Textarea
                id="importantData"
                name="importantData"
                value={formData.importantData}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                name="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="serviceCharge">Minimum Service Charge (Rs)</Label>
              <Input
                id="serviceCharge"
                name="serviceCharge"
                type="number"
                value={formData.serviceCharge}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="remarks">Remarks</Label>
              <Textarea id="remarks" name="remarks" value={formData.remarks} onChange={handleChange} />
            </div>
          </div>
          <CardFooter className="px-0 pb-0">
            <Button type="submit" className="w-full">
              Submit Request
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}

