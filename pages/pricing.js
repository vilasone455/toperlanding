import React from 'react'
import Layout from '../components/Layout'
import { plans } from '../data/plan'
export default function pricing() {
    return (
        <Layout pageTitle="Pricing" description="Pricing">
            <div class="w-full mx-auto bg-white px-5 py-10 text-gray-600 mb-10">
                <div class="text-center max-w-xl mx-auto">
                    <h1 class="text-5xl md:text-6xl font-bold mb-5">Pricing</h1>
                    <h3 class="text-xl font-medium mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit repellat dignissimos laboriosam odit accusamus porro</h3>
                </div>
                <div
                    class="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
                    {plans.map(p => {
                        return (
                            <section class="flex flex-col w-full max-w-sm p-12 space-y-6 bg-white rounded-lg shadow-md border">

                                <div class="flex-shrink-0">
                                    <span
                                        className={"text-4xl font-medium tracking-tight " }>{p.price.monthly}</span>
                                    <span class="text-gray-400" >/month</span>
                                </div>

                                <div class="flex-shrink-0 pb-6 space-y-2 border-b">
                                    <h2 class="text-2xl font-normal" >{p.name}</h2>
                                    <p class="text-sm text-gray-400">{p.discretion}</p>
                                </div>

                                <ul class="flex-1 space-y-4">
                                    {p.features.map(f=>{
                                        return (<li class="flex items-start">
                                        <svg
                                            class="w-6 h-6 text-green-300"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                        <span class="ml-3 text-base font-medium" >{f}</span>
                                    </li>)
                                    })}
                              
                                </ul>

                                <div class="flex-shrink-0 pt-4">
                                    <button
                                    className={`inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${p.name == "Basic" ? 'bg-indigo-500 text-white hover:bg-indigo-700' : 'hover:bg-indigo-500 hover:text-white'} `}
  
                                >Get {p.name}</button>
                            </div>
                        </section>
                )
                        })}

            </div >
           
        </div >
        </Layout >
    )
}
