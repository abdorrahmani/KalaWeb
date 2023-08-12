<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\PhoneRequest;
use App\Models\Phone;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PhoneController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $phones = Phone::latest()->paginate(10000);
        return Inertia::render("" , compact("phones"));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(PhoneRequest $request)
    {
        $request->filled($request->validated());
        $date = Carbon::now();

        $uploadedImages = [];

        if ($request->hasFile('images')) {
            $images = $request->file('images');

            foreach ($images as $image) {
                if ($image->isValid()) {
                    $imageName = time() . '_' . uniqid() . '.' . $image->getClientOriginalExtension();
                    $image->move(public_path("/Laptops/$date->year/$date->month/$date->day/"), $imageName);
                    $uploadedImages[] = $imageName;
                }
            }
        }
        auth()->user()->article()->create([
            'name' =>$request->name,
            'slug' =>$request->slug,
            'brand' =>$request->brand,
            'model' =>$request->model,
            'storage' =>$request->storage,
            'price' =>$request->price,
            'release_date' =>$request->release_date,
            'image' =>$uploadedImages[0],
            'body' =>$request->body,
            'chipset' =>$request->chipset,
            'cpu' =>$request->cpu,
            'gpu' =>$request->gpu,
            'ram' =>$request->ram,
            'screen' =>$request->screen,
            'os' =>$request->os,
            'battery' =>$request->battery,
            'weight' =>$request->weight,
            'size' =>$request->size,
            'sim' =>$request->sim,
            'status' =>$request->status,
            'network' =>$request->network,
            'camera' =>$request->camera,

        ]);
        return redirect()->route('');
    }

    /**
     * Display the specified resource.
     */
    public function show(Phone $phone)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Phone $phone)
    {
        $phone = Phone::find($phone->id);
        return view('', compact('phone'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Phone $phone)
    {
         $phone = Phone::find( $phone->id);
        $request->filled($request->validated());
        $date = Carbon::now();

        $uploadedImages = [];

        if ($request->hasFile('images')) {
            $images = $request->file('images');

            foreach ($images as $image) {
                if ($image->isValid()) {
                    $imageName = time() . '_' . uniqid() . '.' . $image->getClientOriginalExtension();
                    $image->move(public_path("/Phone/$date->year/$date->month/$date->day/"), $imageName);
                    $uploadedImages[] = $imageName;
                     $phone->save();
                }
            }
        }
         $phone->name =$request->name;
         $phone->slug =$request->slug;
         $phone->brand =$request->brand;
         $phone->model =$request->model;
         $phone->storage =$request->storage;
         $phone->price =$request->price;
         $phone->release_date =$request->release_date;
         $phone->image =$uploadedImages[0];
         $phone->body =$request->body;
         $phone->chipset =$request->chipset;
         $phone->cpu =$request->cpu;
         $phone->gpu =$request->gpu;
         $phone->ram =$request->ram;
         $phone->screen =$request->screen;
         $phone->os =$request->os;
         $phone->battery =$request->battery;
         $phone->weight =$request->weight;
         $phone->resolution =$request->resolution;
         $phone->type =$request->type;
         $phone->save();

        return redirect()->route('');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Phone $phone)
    {
        $laptop = Phone::find($phone->id);
        $laptop->delete();
        return Redirect::route("");
    }
}
