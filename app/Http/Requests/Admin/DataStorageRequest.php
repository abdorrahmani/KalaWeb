<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class DataStorageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string','max:255'],
            'slug' => ['string','max:255'],
            'brand'=>['string','max:255'],
            'model'=>['string','max:255'],
            'storage' => ['integer'],
            'price' => ['integer'],
            'release_date' => ['date'],
            'image' => ['image'],
            'color' => ['string' ,'max:255'],
            'body' => ['string'],
        ];
    }
}
