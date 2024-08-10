import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleIcon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const PreparednessGuide = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="mx-auto px-4 py-12 sm:px-6 lg:px-8 pt-20 min-h-dvh">
      <h1 className="text-3xl font-bold mb-8">Preparedness Guide</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="relative group cursor-pointer hover:scale-105 duration-500">
          <AlertDialog>
            <AlertDialogTrigger>
              <Card className="w-full max-w-md p-6 rounded-lg shadow-lg border border-black">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold">
                    Wildfire Preparation Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CircleIcon />
                    <span>Before a wildfire</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CircleIcon />
                    <span>During a wildfire</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CircleIcon />
                    <span>After a wildfire</span>
                  </div>
                </CardContent>
                <CardFooter className="text-center">
                  <Button variant="secondary" className="w-full">
                    Click to View
                  </Button>
                </CardFooter>
              </Card>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Wildfire Prevention & Safety: Before, During & After
                </AlertDialogTitle>
                <AlertDialogDescription className="max-h-96 overflow-y-auto">
                  {/* Radio group for selecting step */}
                  <div className="space-y-4">
                    <RadioGroup
                      value={selectedStep}
                      onValueChange={(value) => {
                        setSelectedStep(value);
                        setSelectedOption(null); // Reset the sub-options when step changes
                      }}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="before" id="r1" />
                        <Label htmlFor="r1">Before a Wildfire</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="during" id="r2" />
                        <Label htmlFor="r2">During a Wildfire</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="after" id="r3" />
                        <Label htmlFor="r3">After a Wildfire</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Conditional rendering based on selectedStep */}
                  {selectedStep === "before" && (
                    <div className="p-6 text-black">
                      <h2 className="text-2xl font-bold">
                        How do I prepare for a wildfire?
                      </h2>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="family"
                            name="preparation"
                            onChange={() => setSelectedOption("family")}
                            checked={selectedOption === "family"}
                          />

                          <label htmlFor="family" className="text-lg">
                            My Family
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="animals"
                            name="preparation"
                            onChange={() => setSelectedOption("animals")}
                            checked={selectedOption === "animals"}
                          />
                          <label htmlFor="animals" className="text-lg">
                            My Animals
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="belongings"
                            name="preparation"
                            onChange={() => setSelectedOption("belongings")}
                            checked={selectedOption === "belongings"}
                          />
                          <label htmlFor="belongings" className="text-lg">
                            My Belongings
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="home"
                            name="preparation"
                            onChange={() => setSelectedOption("home")}
                            checked={selectedOption === "home"}
                          />
                          <label htmlFor="home" className="text-lg">
                            My Home
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedStep === "during" && (
                    <div className="p-6 text-black">
                      <h2 className="text-2xl font-bold">
                        What do I do if there's an active wildfire?
                      </h2>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="yesplan"
                            name="preparation"
                            onChange={() => setSelectedOption("yesplan")}
                            checked={selectedOption === "yesplan"}
                          />
                          <label htmlFor="yesplan" className="text-lg">
                            I have a plan and am ready to follow through.
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="noplan"
                            name="preparation"
                            onChange={() => setSelectedOption("noplan")}
                            checked={selectedOption === "noplan"}
                          />
                          <label htmlFor="noplan" className="text-lg">
                            I don't have a plan. What should I do?
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedStep === "after" && (
                    <div className="p-6 text-black">
                      <h2 className="text-2xl font-bold">
                        What do I do after a wildfire?
                      </h2>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="safetogo"
                            name="preparation"
                            onChange={() => setSelectedOption("safetogo")}
                            checked={selectedOption === "safetogo"}
                          />
                          <label htmlFor="safetogo" className="text-lg">
                            Authorities said it is safe to return home.
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="unsafetogo"
                            name="preparation"
                            onChange={() => setSelectedOption("unsafetogo")}
                            checked={selectedOption === "unsafetogo"}
                          />
                          <label htmlFor="unsafetogo" className="text-lg">
                            Authorities said it is not safe to return home.
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Conditional rendering based on selectedOption */}
                  {selectedOption === "home" && (
                    <div className="p-6 text-black">
                      <div className="bg-background text-foreground p-8 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">
                          Preparing Your Home for a Wildfire Emergency
                        </h2>
                        <div className="space-y-8">
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Fireproof Your Home
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Fire-Resistant Materials
                                </h3>
                                <p>
                                  Use fire-resistant materials for your roof,
                                  siding, and decks. Consider upgrading to
                                  materials like metal, tile, or fiberglass to
                                  better protect your home.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Seal Openings
                                </h3>
                                <p>
                                  Ensure that all openings, such as vents and
                                  windows, are properly sealed and covered with
                                  fire-resistant mesh to prevent embers from
                                  entering your home.
                                </p>
                              </div>
                            </div>
                          </section>
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Create Defensible Space
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Clear Vegetation
                                </h3>
                                <p>
                                  Remove dry leaves, branches, and flammable
                                  plants from around your home. Maintain a
                                  defensible space of at least 30 feet to slow
                                  the spread of fire.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Trim Trees
                                </h3>
                                <p>
                                  Trim trees regularly to keep branches at least
                                  10 feet away from your home and each other.
                                  Remove any dead or overhanging branches.
                                </p>
                              </div>
                            </div>
                          </section>
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Prepare for Power Outages
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Backup Power Source
                                </h3>
                                <p>
                                  Install a backup generator to keep essential
                                  systems running during power outages. Ensure
                                  you have fuel and know how to operate it
                                  safely.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Surge Protectors
                                </h3>
                                <p>
                                  Use surge protectors to safeguard your
                                  electronics from power surges caused by
                                  wildfires. Unplug non-essential electronics if
                                  you need to evacuate.
                                </p>
                              </div>
                            </div>
                          </section>
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Communicate Your Plan
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Inform Your Household
                                </h3>
                                <p>
                                  Ensure everyone in your household knows the
                                  wildfire emergency plan, including evacuation
                                  routes and the location of emergency supplies.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Notify Authorities
                                </h3>
                                <p>
                                  If you have taken special precautions, such as
                                  installing a backup generator, inform local
                                  authorities so they are aware of your
                                  preparations.
                                </p>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedOption === "family" && (
                    <div className="bg-background text-foreground p-8 max-w-3xl mx-auto  ">
                      <h2 className="text-3xl font-bold mb-4">
                        Preparing Your Family for a Wildfire Emergency
                      </h2>
                      <div className="space-y-8 ">
                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            Create an Evacuation Plan
                          </h2>
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">
                                Identify Evacuation Routes
                              </h3>
                              <p>
                                Know at least two ways to leave your area and
                                have a plan for where to go. Identify multiple
                                evacuation routes in case some are blocked.
                              </p>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-2">
                                Locate Shelters
                              </h3>
                              <p>
                                Research and identify potential shelters, such
                                as community centers or schools, where you can
                                go if you need to evacuate.
                              </p>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-2">
                                Sign Up for Emergency Alerts
                              </h3>
                              <p>
                                Register for emergency alert systems in your
                                area to receive timely notifications about
                                wildfires and evacuation orders.
                              </p>
                            </div>
                          </div>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            Assemble an Emergency Kit
                          </h2>
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">
                                Essential Items
                              </h3>
                              <ul className="list-disc pl-6 space-y-2">
                                <li>Bottled water and non-perishable food</li>
                                <li>
                                  Flashlights, batteries, and a battery-powered
                                  radio
                                </li>
                                <li>
                                  First aid kit and any necessary medications
                                </li>
                                <li>
                                  Copies of important documents (IDs, insurance,
                                  etc.)
                                </li>
                                <li>Cash and credit cards</li>
                                <li>Changes of clothes and sturdy shoes</li>
                                <li>
                                  Blankets, sleeping bags, and warm clothing
                                </li>
                                <li>
                                  Pet supplies (food, leash, carrier, etc.)
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-2">
                                Prepare in Advance
                              </h3>
                              <p>
                                Assemble your emergency kit and keep it in an
                                easily accessible location, ready to go at a
                                moment's notice.
                              </p>
                            </div>
                          </div>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            Protect Your Home
                          </h2>
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">
                                Create Defensible Space
                              </h3>
                              <p>
                                Clear vegetation and flammable materials from
                                around your home to create a buffer zone that
                                can help protect it from wildfire.
                              </p>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-2">
                                Secure Your Property
                              </h3>
                              <p>
                                Ensure your home is well-maintained, with clean
                                gutters, fire-resistant roofing, and properly
                                installed screens on vents and windows.
                              </p>
                            </div>
                          </div>
                        </section>
                        <section>
                          <h2 className="text-2xl font-bold mb-4">
                            Communicate with Loved Ones
                          </h2>
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">
                                Create a Family Communication Plan
                              </h3>
                              <p>
                                Establish a communication plan with your family
                                members, including meeting points and contact
                                information for emergencies.
                              </p>
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold mb-2">
                                Share Your Plans
                              </h3>
                              <p>
                                Inform your family, friends, and neighbors of
                                your plans in case of a wildfire, so they know
                                how to reach you and where to find you.
                              </p>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  )}
                  {selectedOption === "animals" && (
                    <div className="p-6 text-black">
                      <div className="bg-background text-foreground p-8 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">
                          Preparing Your Animals for a Wildfire Emergency
                        </h2>
                        <div className="space-y-8">
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Create an Evacuation Plan
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Plan for Your Pets
                                </h3>
                                <p>
                                  Identify pet-friendly evacuation routes and
                                  shelters. Keep carriers, leashes, and extra
                                  pet food ready for a quick evacuation.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Transporting Large Animals
                                </h3>
                                <p>
                                  If you have large animals like horses, arrange
                                  for transport well in advance. Practice
                                  loading them into trailers to avoid delays
                                  during an emergency.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Create an Animal Emergency Kit
                                </h3>
                                <p>
                                  Include food, water, medications, and
                                  identification tags. Prepare for at least a
                                  week of care.
                                </p>
                              </div>
                            </div>
                          </section>
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Stay Informed
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Monitor Alerts
                                </h3>
                                <p>
                                  Stay informed about wildfire alerts and
                                  evacuation orders. Sign up for emergency
                                  notifications and have a battery-powered radio
                                  on hand.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Know Animal Shelters
                                </h3>
                                <p>
                                  Identify local animal shelters or veterinary
                                  clinics that may offer temporary housing
                                  during an evacuation.
                                </p>
                              </div>
                            </div>
                          </section>
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Consider Your Livestock
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Safe Fencing
                                </h3>
                                <p>
                                  Create safe enclosures away from fire-prone
                                  areas. If possible, use fire-resistant
                                  materials for fencing.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Water Supply
                                </h3>
                                <p>
                                  Ensure an adequate water supply for your
                                  livestock in case of prolonged evacuation or
                                  restricted access to pastures.
                                </p>
                              </div>
                            </div>
                          </section>
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Communicate with Others
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Coordinate with Neighbors
                                </h3>
                                <p>
                                  Plan with neighbors to help each other in
                                  evacuating animals. Share contact information
                                  and agree on a plan for mutual assistance.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Inform Local Authorities
                                </h3>
                                <p>
                                  Notify local animal control or agricultural
                                  extension offices of your plans and any
                                  special needs for your animals during a
                                  wildfire.
                                </p>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedOption === "belongings" && (
                    <div className="p-6 text-black">
                      <div className="bg-background text-foreground p-8 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">
                          Preparing Your Belongings for a Wildfire Emergency
                        </h2>
                        <div className="space-y-8">
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Create a Packing List
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Essential Items
                                </h3>
                                <p>
                                  Identify the most important items you need to
                                  take with you, such as legal documents,
                                  heirlooms, and electronics. Have a checklist
                                  ready.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Protect Valuables
                                </h3>
                                <p>
                                  Store valuable items like jewelry and
                                  important documents in a fireproof safe. If
                                  time allows, consider moving them to a secure
                                  location outside the fire zone.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Prepare a Go-Bag
                                </h3>
                                <p>
                                  Keep a packed bag with essential belongings
                                  ready for immediate evacuation. Include
                                  necessities like clothing, toiletries, and
                                  medications.
                                </p>
                              </div>
                            </div>
                          </section>
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Document Your Possessions
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Take Inventory
                                </h3>
                                <p>
                                  Create a detailed inventory of your
                                  possessions. Include photos, serial numbers,
                                  and descriptions. Store this information in a
                                  secure, cloud-based service.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Review Insurance Coverage
                                </h3>
                                <p>
                                  Ensure your insurance policy covers wildfire
                                  damage. Keep copies of your policy and contact
                                  information for your insurance company in a
                                  safe place.
                                </p>
                              </div>
                            </div>
                          </section>
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Secure Your Belongings
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Store Items Safely
                                </h3>
                                <p>
                                  Move valuable items to a lower risk area if
                                  time permits. Consider storing items in a
                                  fire-resistant storage unit.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Backup Digital Files
                                </h3>
                                <p>
                                  Ensure all important digital files are backed
                                  up to an external drive or cloud storage. This
                                  includes family photos, legal documents, and
                                  financial records.
                                </p>
                              </div>
                            </div>
                          </section>
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Communicate Your Plans
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Inform Family Members
                                </h3>
                                <p>
                                  Make sure family members know what items are
                                  important to grab in case of a quick
                                  evacuation. Assign responsibilities to
                                  different people.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Coordinate with Neighbors
                                </h3>
                                <p>
                                  Work with neighbors to protect each other’s
                                  belongings if possible. Keep an eye on each
                                  other's homes and share evacuation plans.
                                </p>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedOption === "yesplan" && (
                    <div className="p-6 text-black">
                      <div className="bg-background text-foreground p-8 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">
                          During a Fire: What if We Have a Plan?
                        </h2>
                        <div className="space-y-8">
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Follow the Evacuation Plan
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Execute the Evacuation Plan
                                </h3>
                                <p>
                                  If you have an evacuation plan in place, now
                                  is the time to put it into action. Ensure all
                                  family members know their roles, the
                                  evacuation routes, and the safe meeting
                                  points. Move quickly and calmly, and stick to
                                  your pre-identified evacuation routes.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Communicate with Family and Authorities
                                </h3>
                                <p>
                                  Use your established communication plan to
                                  stay in touch with all family members and
                                  local authorities. Monitor emergency alerts
                                  and updates about the wildfire, and keep
                                  everyone informed.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Prepare Your Home Before Leaving
                                </h3>
                                <p>
                                  If time allows, secure your home by closing
                                  windows and doors, shutting off utilities if
                                  recommended, and ensuring that flammable
                                  materials are cleared from the vicinity of
                                  your home.
                                </p>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedOption === "noplan" && (
                    <div className="p-6 text-black">
                      <div className="bg-background text-foreground p-8 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">
                          During a Fire: What if We Don’t Have a Plan?
                        </h2>
                        <div className="space-y-8">
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Immediate Evacuation
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Leave Immediately
                                </h3>
                                <p>
                                  Without a plan, the first priority is to
                                  evacuate as quickly as possible. Choose the
                                  safest route available and head towards the
                                  nearest known shelter or a location away from
                                  the fire.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Stay Informed
                                </h3>
                                <p>
                                  As you evacuate, stay informed by accessing
                                  emergency updates on your mobile device or
                                  listening to emergency broadcasts on your car
                                  radio. Information on the go is crucial to
                                  making informed decisions.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Maintain Calm
                                </h3>
                                <p>
                                  Stay as calm as possible. Without a plan, it’s
                                  easy to panic, but focusing on your immediate
                                  actions and following the instructions of
                                  local authorities will increase your chances
                                  of staying safe.
                                </p>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedOption === "safetogo" && (
                    <div className="p-6 text-black">
                      <div className="bg-background text-foreground p-8 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">
                          After a Fire: What if Authorities Said It's Safe to Go
                          Home?
                        </h2>
                        <div className="space-y-8">
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Returning Home Safely
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Inspect Your Home
                                </h3>
                                <p>
                                  Before re-entering your home, conduct a
                                  thorough inspection of the exterior for any
                                  visible damage. Look for structural issues,
                                  hot spots, and the smell of smoke, which could
                                  indicate lingering dangers.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Check Utilities and Services
                                </h3>
                                <p>
                                  Ensure that utilities such as gas,
                                  electricity, and water are safe to use. If you
                                  have any doubts, contact professionals to
                                  inspect and restore services before using
                                  them.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Document Damage
                                </h3>
                                <p>
                                  Take photos and videos of any damage to your
                                  property for insurance purposes. Keep records
                                  of all repairs and communications with your
                                  insurance company.
                                </p>
                              </div>
                            </div>
                          </section>
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Begin the Cleanup Process
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Remove Debris Safely
                                </h3>
                                <p>
                                  Wear protective gear and safely remove any
                                  debris from your property. Be cautious of
                                  hazardous materials, and dispose of them
                                  according to local guidelines.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Air Out Your Home
                                </h3>
                                <p>
                                  Open windows and doors to ventilate your home
                                  and remove any lingering smoke and odors. Use
                                  fans and air purifiers to help with the
                                  process.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Seek Professional Help
                                </h3>
                                <p>
                                  For extensive damage, consider hiring
                                  professionals for cleaning, repairs, and
                                  restoration to ensure your home is safe and
                                  livable again.
                                </p>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  )}
                  {selectedOption === "unsafetogo" && (
                    <div className="p-6 text-black">
                      <div className="bg-background text-foreground p-8 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">
                          After a Fire: What if It's Not Safe to Go Home?
                        </h2>
                        <div className="space-y-8">
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Staying in Temporary Shelter
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Find Safe Accommodation
                                </h3>
                                <p>
                                  If authorities have determined that it is not
                                  safe to return home, find a temporary shelter
                                  or accommodation. Consider staying with
                                  family, friends, or at a designated emergency
                                  shelter.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Keep Updated
                                </h3>
                                <p>
                                  Stay informed by following updates from local
                                  authorities regarding the safety of your area.
                                  Monitor news and emergency alerts to know when
                                  it’s safe to return.
                                </p>
                              </div>
                            </div>
                          </section>
                          <section>
                            <h2 className="text-2xl font-bold mb-4">
                              Plan for Extended Displacement
                            </h2>
                            <div className="space-y-4">
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Manage Essential Needs
                                </h3>
                                <p>
                                  Ensure that you have access to essential
                                  supplies such as food, water, medications, and
                                  clothing. If you’re in a shelter, familiarize
                                  yourself with available resources and
                                  services.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Connect with Support Services
                                </h3>
                                <p>
                                  Reach out to local support services and
                                  disaster relief organizations for assistance
                                  with housing, financial aid, and emotional
                                  support.
                                </p>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Stay Connected
                                </h3>
                                <p>
                                  Keep in touch with family, friends, and
                                  neighbors to share updates and support each
                                  other during this challenging time.
                                </p>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  )}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Close</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default PreparednessGuide;
