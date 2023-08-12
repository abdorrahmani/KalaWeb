<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\LaptopRequest;
use App\Models\Laptop;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class LaptopController extends Controller
{
    public function __construct()
    {
        $this->middleware(['role:admin|seller'])->except('index');
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $laptops = Laptop::latest()->paginate(10000);
        return Inertia::render("" , compact("laptops"));
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
    public function store(LaptopRequest $request)
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
            'resolution' =>$request->resolution,
            'type' =>$request->type,
        ]);
        return redirect()->route('');
    }

    /**
     * Display the specified resource.
     */
    public function edit(Laptop $laptop)
    {
        $laptop = Laptop::find($laptop->id);
        return view('', compact('laptop'));
    }

    /**
     * Update the specified resource in storage.
     */


    /**
     * Display the specified resource.
     */
    public function show(Laptop $laptop)
    {

    }



    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Laptop $laptop)
    {
        $laptop = Laptop::find($laptop->id);
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
                    $laptop->save();
                }
            }
        }
            $laptop->name =$request->name;
            $laptop->slug =$request->slug;
            $laptop->brand =$request->brand;
            $laptop->model =$request->model;
            $laptop->storage =$request->storage;
            $laptop->price =$request->price;
            $laptop->release_date =$request->release_date;
            $laptop->image =$uploadedImages[0];
            $laptop->body =$request->body;
            $laptop->chipset =$request->chipset;
            $laptop->cpu =$request->cpu;
            $laptop->gpu =$request->gpu;
            $laptop->ram =$request->ram;
            $laptop->screen =$request->screen;
            $laptop->os =$request->os;
            $laptop->battery =$request->battery;
            $laptop->weight =$request->weight;
            $laptop->resolution =$request->resolution;
            $laptop->type =$request->type;
            $laptop->save();

        return redirect()->route('');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Laptop $laptop)
    {
        $laptop = Laptop::find($laptop->id);
        $laptop->delete();
        return Redirect::route("");
    }
}
