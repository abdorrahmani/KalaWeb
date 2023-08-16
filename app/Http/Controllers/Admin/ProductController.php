<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\LaptopRequest;
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

    public function create()
    {
        return Inertia::render('AdminPanel/admin/Products/Create');
    }

    public function store(LaptopRequest $request)
    {

        dd($request);
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
