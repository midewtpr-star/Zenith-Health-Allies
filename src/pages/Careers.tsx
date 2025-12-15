import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Briefcase, CheckCircle, Upload } from 'lucide-react';
import { submitToSheets } from '@/lib/forms';

const benefits = [
  'Competitive salary packages',
  'Flexible scheduling options',
  'Professional development opportunities',
  'Supportive work environment',
  'Health insurance benefits',
  'Paid time off',
];

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'District of Columbia',
];

export default function CareersPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    license: [] as string[],
    isOver18: '',
    hasDriverLicense: '',
    ownsCar: '',
    preferredShifts: [] as string[],
    previousExperience: '',
    resume: null as File | null,
    howDidYouHear: '',
    consent: false,
  });

  const handleLicenseChange = (license: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      license: checked 
        ? [...prev.license, license] 
        : prev.license.filter(l => l !== license)
    }));
  };

  const handleShiftChange = (shift: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      preferredShifts: checked 
        ? [...prev.preferredShifts, shift] 
        : prev.preferredShifts.filter(s => s !== shift)
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        toast({
          title: 'Invalid file type',
          description: 'Please upload a .doc, .docx, or .pdf file.',
          variant: 'destructive',
        });
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: 'File too large',
          description: 'Please upload a file smaller than 10MB.',
          variant: 'destructive',
        });
        return;
      }
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };

// Add this helper function outside your component or inside it
const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!formData.consent) {
    toast({
      title: 'Consent required',
      description: 'Please accept the privacy consent to submit your application.',
      variant: 'destructive',
    });
    return;
  }
  // Require a resume file before submission
  if (!formData.resume) {
    toast({
      title: 'Resume required',
      description: 'Please attach a resume (.doc, .docx, or .pdf).',
      variant: 'destructive',
    });
    return;
  }

  setIsSubmitting(true);

  try {
    let resumeBase64 = '';

    if (formData.resume) {
      resumeBase64 = await convertFileToBase64(formData.resume);
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zipCode: formData.zipCode,
      license: formData.license.join(', '),
      isOver18: formData.isOver18,
      hasDriverLicense: formData.hasDriverLicense,
      ownsCar: formData.ownsCar,
      preferredShifts: formData.preferredShifts.join(', '),
      previousExperience: formData.previousExperience,
      resumeName: formData.resume ? formData.resume.name : '',
      resumeMimeType: formData.resume ? formData.resume.type : '',
      resumeData: resumeBase64,
      howDidYouHear: formData.howDidYouHear,
    };

    console.log(payload)

    const result = await submitToSheets('career', payload);

    if (result.success) {
      toast({
        title: 'Application Submitted!',
        description: 'Thank you for your interest. We will review your application and get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        license: [],
        isOver18: '',
        hasDriverLicense: '',
        ownsCar: '',
        preferredShifts: [],
        previousExperience: '',
        resume: null,
        howDidYouHear: '',
        consent: false,
      });
    } else {
      toast({
        title: 'Submission Failed',
        description: result.message || 'Please try again later.',
        variant: 'destructive',
      });
    }
  } catch (error) {
    console.error('Submission Error:', error);
    toast({
      title: 'Error',
      description: 'Something went wrong preparing the file.',
      variant: 'destructive',
    });
  }

  setIsSubmitting(false);
};

  return (
    <Layout>
      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Why Join Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Zenith Health Allies, we believe our employees are our greatest asset.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-foreground text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Apply Now</h2>
              <p className="text-muted-foreground">
                Fill out the form below to submit your application. Fields marked with * are required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card p-6 md:p-10 rounded-2xl shadow-soft space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-foreground border-b border-border pb-2">Personal Information</h3>
                
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter name here"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="mt-1.5"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    placeholder="Enter address here"
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    required
                    className="mt-1.5"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      placeholder="Enter city here"
                      value={formData.city}
                      onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                      required
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Select value={formData.state} onValueChange={(value) => setFormData(prev => ({ ...prev, state: value }))}>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>{state}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="zipCode">Zip Code *</Label>
                    <Input
                      id="zipCode"
                      placeholder="Enter zip code"
                      value={formData.zipCode}
                      onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value }))}
                      required
                      className="mt-1.5"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (number)"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    required
                    className="mt-1.5"
                  />
                </div>
              </div>

              {/* Qualifications */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-foreground border-b border-border pb-2">Qualifications</h3>
                
                <div>
                  <Label className="mb-3 block">What License Do You Currently Hold?</Label>
                  <div className="flex flex-wrap gap-4">
                    {['HHA', 'LPN', 'RN', 'Other'].map((license) => (
                      <div key={license} className="flex items-center gap-2">
                        <Checkbox
                          id={`license-${license}`}
                          checked={formData.license.includes(license)}
                          onCheckedChange={(checked) => handleLicenseChange(license, checked as boolean)}
                        />
                        <Label htmlFor={`license-${license}`} className="cursor-pointer font-normal">{license}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="mb-3 block">Are you over 18?</Label>
                  <RadioGroup
                    value={formData.isOver18}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, isOver18: value }))}
                    className="flex gap-6"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="over18-yes" />
                      <Label htmlFor="over18-yes" className="cursor-pointer font-normal">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="over18-no" />
                      <Label htmlFor="over18-no" className="cursor-pointer font-normal">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="mb-3 block">Do you have a driver's license?</Label>
                  <RadioGroup
                    value={formData.hasDriverLicense}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, hasDriverLicense: value }))}
                    className="flex gap-6"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="driver-yes" />
                      <Label htmlFor="driver-yes" className="cursor-pointer font-normal">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="driver-no" />
                      <Label htmlFor="driver-no" className="cursor-pointer font-normal">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="mb-3 block">Do you own a car?</Label>
                  <RadioGroup
                    value={formData.ownsCar}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, ownsCar: value }))}
                    className="flex gap-6"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="yes" id="car-yes" />
                      <Label htmlFor="car-yes" className="cursor-pointer font-normal">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="car-no" />
                      <Label htmlFor="car-no" className="cursor-pointer font-normal">No</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="mb-3 block">What shifts would you prefer?</Label>
                  <div className="flex flex-wrap gap-4">
                    {['Days', 'PM', 'Nights', 'Live-in'].map((shift) => (
                      <div key={shift} className="flex items-center gap-2">
                        <Checkbox
                          id={`shift-${shift}`}
                          checked={formData.preferredShifts.includes(shift)}
                          onCheckedChange={(checked) => handleShiftChange(shift, checked as boolean)}
                        />
                        <Label htmlFor={`shift-${shift}`} className="cursor-pointer font-normal">{shift}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience & Resume */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl text-foreground border-b border-border pb-2">Experience & Resume</h3>
                
                <div>
                  <Label htmlFor="experience">Previous Experience</Label>
                  <Textarea
                    id="experience"
                    placeholder="Enter previous experience here"
                    value={formData.previousExperience}
                    onChange={(e) => setFormData(prev => ({ ...prev, previousExperience: e.target.value }))}
                    className="mt-1.5 min-h-[120px]"
                  />
                </div>

                <div>
                  <Label htmlFor="resume">Attach Resume (accepted file formats: .doc, .docx, .pdf | Max: 10MB) *</Label>
                  <div className="mt-1.5">
                    <label htmlFor="resume" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-xl cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">
                          {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">.doc, .docx, or .pdf (Max 10MB)</p>
                      </div>
                      <input
                        id="resume"
                        type="file"
                        accept=".doc,.docx,.pdf"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="howDidYouHear">How did you hear about us?</Label>
                  <Input
                    id="howDidYouHear"
                    placeholder="Enter how did you hear about us here"
                    value={formData.howDidYouHear}
                    onChange={(e) => setFormData(prev => ({ ...prev, howDidYouHear: e.target.value }))}
                    className="mt-1.5"
                  />
                </div>
              </div>

              {/* Consent */}
              <div className="bg-muted/30 p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked as boolean }))}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="cursor-pointer font-normal text-sm text-muted-foreground leading-relaxed">
                    I consent to the collection, use, storage, and processing of my personal and, where applicable, health-related information, including any data I submit on behalf of others, for the purpose of evaluating or fulfilling my request made through this form. I understand this will be handled in accordance with the Privacy Notice.
                  </Label>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
