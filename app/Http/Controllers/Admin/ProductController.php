<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\DataStorageRequest;
use App\Http\Requests\Admin\LaptopRequest;
use App\Http\Requests\Admin\PhoneRequest;
use App\Models\Laptop;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use function Termwind\render;

class ProductController extends Controller
{
    /**
     * @return Response
     */
    public function index()
    {
        return Inertia::render('AdminPanel/admin/Products/index');
    }

    /**
     * @return Response
     */
    public function create()
    {
        return Inertia::render('AdminPanel/admin/Products/Create');
    }

    public function laptopStore(LaptopRequest $request)
    {
        $request->filled($request->validated());
        $date = Carbon::now();
        if($request->hasfile('images')) {
            foreach ($request->file('images') as $file) {
                $name = $file->getClientOriginalName();
                $file->move(public_path() . "/uploads/product/Laptops/$request->brand/$date->year/$date->month/", $name);
                $imgData[] = $name;
            }
            $laptop = new Laptop();
            $laptop->name = $request->name;
            $laptop->brand = $request->brand;
            $laptop->type = $request->type;
            $laptop->model = $request->model;
            $laptop->price = $request->price;
            $laptop->body = $request->body;
            $laptop->slug = $request->slug;
            $laptop->storage = $request->storage;
            $laptop->release_date = $request->release_date;
            $laptop->chipset = $request->chipset;
            $laptop->ram = $request->ram;
            $laptop->cpu = $request->cpu;
            $laptop->gpu = $request->gpu;
            $laptop->screen = $request->screen;
            $laptop->weight = $request->weight;
            $laptop->battery = $request->battery;
            $laptop->os = $request->os;
            $laptop->resolution = $request->resolution;
            $laptop->count = $request->count;
            $laptop->images = json_encode($imgData);
            $laptop->save();
        }

        return redirect()->route('products.index');
    }

    public function phoneStore(PhoneRequest $request)
    {
        $request->filled($request->validated());
        $date = Carbon::now();
        if($request->hasfile('images')) {
            foreach ($request->file('images') as $file) {
                $name = $file->getClientOriginalName();
                $file->move(public_path() . "/uploads/product/Laptops/$request->brand/$date->year/$date->month/", $name);
                $imgData[] = $name;
            }
            $laptop = new Laptop();
            $laptop->name = $request->name;
            $laptop->brand = $request->brand;
            $laptop->type = $request->type;
            $laptop->model = $request->model;
            $laptop->price = $request->price;
            $laptop->body = $request->body;
            $laptop->slug = $request->slug;
            $laptop->storage = $request->storage;
            $laptop->release_date = $request->release_date;
            $laptop->chipset = $request->chipset;
            $laptop->ram = $request->ram;
            $laptop->cpu = $request->cpu;
            $laptop->gpu = $request->gpu;
            $laptop->screen = $request->screen;
            $laptop->weight = $request->weight;
            $laptop->battery = $request->battery;
            $laptop->os = $request->os;
            $laptop->resolution = $request->resolution;
            $laptop->count = $request->count;
            $laptop->images = json_encode($imgData);
            $laptop->save();
        }

        return redirect()->route('products.index');
    }
    public function storageStore(DataStorageRequest $request)
    {
        $request->filled($request->validated());
        $date = Carbon::now();
        if($request->hasfile('images')) {
            foreach ($request->file('images') as $file) {
                $name = $file->getClientOriginalName();
                $file->move(public_path() . "/uploads/product/Laptops/$request->brand/$date->year/$date->month/", $name);
                $imgData[] = $name;
            }
            $laptop = new Laptop();
            $laptop->name = $request->name;
            $laptop->brand = $request->brand;
            $laptop->type = $request->type;
            $laptop->model = $request->model;
            $laptop->price = $request->price;
            $laptop->body = $request->body;
            $laptop->slug = $request->slug;
            $laptop->storage = $request->storage;
            $laptop->release_date = $request->release_date;
            $laptop->chipset = $request->chipset;
            $laptop->ram = $request->ram;
            $laptop->cpu = $request->cpu;
            $laptop->gpu = $request->gpu;
            $laptop->screen = $request->screen;
            $laptop->weight = $request->weight;
            $laptop->battery = $request->battery;
            $laptop->os = $request->os;
            $laptop->resolution = $request->resolution;
            $laptop->count = $request->count;
            $laptop->images = json_encode($imgData);
            $laptop->save();
        }

        return redirect()->route('products.index');
    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {
    }
}
