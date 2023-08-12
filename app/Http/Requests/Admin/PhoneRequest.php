<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class PhoneRequest extends FormRequest
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
            'name' => ['string', 'max:255'],
            'slug' => ['email', 'max:255'],
            'brand'=>['string', 'max:255'],
            'model'=> ['string', 'max:255'],
            'price'=> ['numeric' , 'max:255'],
            'images'=> ['image'],
            'body'=> ['string'],
            'storage'=> ['integer'],
            'release_date'=> ['date'],
            'color' =>['string'],
            'os'=> ['string'],
            'sim'=> ['string'],
            'network' =>['string'],
            'ram' =>['string'],
            'cpu' =>['string'],
            'screen' =>['string'],
            'battery' =>['string'],
            'chipset' =>['string'],
            'size' =>['string'],
            'weight' =>['string'],
            'status' =>['boolean'],
            'camera' => ['string'],
            'gpu' => ['string'],
        ];
    }

}
