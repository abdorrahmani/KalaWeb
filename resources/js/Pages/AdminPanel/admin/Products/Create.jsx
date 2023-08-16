import {useState} from "react";
import {useForm} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import InputError from "@/Components/InputError.jsx";
import AdminLayout from "@/Layouts/admin/AdminLayout.jsx";
import Editor from "ckeditor5-custom-build/build/ckeditor.js";
import { CKEditor } from '@ckeditor/ckeditor5-react'
import {
    FormControl,
    FormLabel, Select,
} from "@chakra-ui/react"
export default function Create() {
    const [showComponent, setShowComponent] = useState(null);


    const editorConfiguration = {

        language: {ui: 'fa', content: "fa" },
        toolbar:  [
            'undo', 'redo',
            '|',
            'heading',
            '|',
            'removeFormat', 'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript',
            '|',
            'horizontalLine',
            '|',
            '-',
            'highlight', 'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
            '|',
            'link', 'blockQuote', 'insertTable', 'imageInsert','imageUpload', 'codeBlock', 'code', 'htmlEmbed',
            '|',
            'bulletedList', 'numberedList', 'todoList',
            '|',
            'outdent', 'indent', 'alignment','language'

        ]
    };

    // This function takes a parameter 'name' and sets the show component to the given name

    const laptop = (name)=>{
        setShowComponent(name)
    }
    const telephone = (name)=>{
        setShowComponent(name)
    }

    const data_storage = (name)=>{
        setShowComponent(name)
    }


    return (
        <>
           <AdminLayout>
               {/*Header*/}
               <p className="mt-6">نوع محصول</p>
               <div className="p-6 gap-4 grid grid-cols-3">
                   <PrimaryButton className="bg-red-500/20" onClick={()=>laptop('laptop')} >
                       لپ تاپ
                   </PrimaryButton>

                   <PrimaryButton className="bg-navy-500/20" onClick={()=>telephone('telephone')}>
                       تلفن همراه
                   </PrimaryButton>

                   <PrimaryButton className="bg-pink-500/20" onClick={()=>data_storage('data_storage')}>
                       حافضه
                   </PrimaryButton>

               </div>
               {/*Show /Form*/}
               {showComponent === "laptop" &&
                   <>
                      <LaptopForm editorConfiguration={editorConfiguration}/>
                   </>
               }
               {
                   showComponent === "telephone" &&
                   <>
                       <TelephoneForm editorConfiguration={editorConfiguration}/>
                   </>
               }

               {
                   showComponent === "data_storage" &&
                   <>
                       <DataStorageForm editorConfiguration={editorConfiguration}/>
                   </>
               }


           </AdminLayout>
        </>
    )
}
// Laptop form Component
function LaptopForm({editorConfiguration}){
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        name : '',
        slug : '',
        brand : '',
        model : '',
        storage : '',
        price : '',
        release_date : '',
        images : null,
        body : '',
        status : 0,
        chipset : '',
        cpu : '',
        gpu : '',
        ram : '',
        screen : '',
        os : '',
        battery : '',
        weight : '',
        resolution : '',
        type : '',
        count : '',
    });
    const [selectedImages , setSelectedImage] = useState([]);
    const [type, setType] = useState('');
    const [brand, setBrand] = useState('');

    const handleFileChange=(e)=>{
        const files = Array.from(e.target.files)
        setSelectedImage([...selectedImages,...files]);
    }
    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        selectedImages.forEach(image =>{
            formData.append('images[]' , image)
        })

        post(route('products.store'), {forceFormData:true});
    };



    return(
        <form onSubmit={submit}>
            <p>لپ تاپ</p>
            <div className="grid grid-cols-1 py-5 px-6 gap-4">
                <InputLabel value="نام"/>
                <TextInput
                    id="title"
                    label="نام"
                    value={data.name}
                    handleChange={(e) => setData('name', e.target.value)}
                    autoComplete="name"
                />
                <InputError className="mt-2" message={errors.name} />

                <InputLabel value="اسلاگ slug"/>
                <TextInput
                    id="slug"
                    type="text"
                    label="Slug"
                    value={data.slug}
                    handleChange={(e) => setData('slug', e.target.value)}
                    className="text-white"
                />
                <InputError className="mt-2" message={errors.slug} />

                <div className="grid grid-cols-4 gap-2">
                    <FormControl id="type" >
                        <FormLabel>نوع:</FormLabel>
                        <Select placeholder="نوع لپ تاپ" value={type}
                                onChange={(event) => setData('type',event.target.value)}>
                            <option className="p-2" value="muliti">مولتی مدیا</option>
                            <option value="gameing">گیمینگ</option>
                            <option value="enginering">مهندسی</option>
                            <option value="public">کاربری عمومی</option>
                        </Select>
                    </FormControl>

                    <div>
                        <InputLabel>برند:</InputLabel>
                        <select placeholder="برند لپ تاپ" value={brand}
                                onChange={(event) => setBrand(setData('brand',event.target.value))}>
                            <option className="p-2" value="macbook">macbook</option>
                            <option value="hp">HP</option>
                            <option value="asus">Asus</option>
                            <option value="dell">Dell</option>
                            <option value="lenovo">Lenovo</option>
                            <option value="acer">Acer</option>
                            <option value="xiaomi">Xiaomi</option>
                            <option value="samsung">Samsung</option>
                            { console.log(brand)}
                        </select>
                    </div>



                   <div>
                       <InputLabel id="images" className="">عکس ها :</InputLabel>
                       <input type="file" className="my-5"  onChange={handleFileChange}
                              accept="image/png, image/jpeg" multiple/>
                   </div>

                    <div>
                        <InputLabel id="body" >قیمت :</InputLabel>
                        <TextInput id="price" type="text" label="Price" value={data.price}
                                   handleChange={(e) => setData('price', e.target.value)}
                        />
                    </div>


                </div>

                <InputLabel id="model" >مدل:</InputLabel>
                <TextInput id="model" type="text" label="model" value={data.model}
                           handleChange={(e) => setData('model', e.target.value)}
                />

                <div className="grid grid-cols-4 gap-4">
                    <>
                        <InputLabel id="storage" >حافظه:</InputLabel>
                        <TextInput id="storage" type="text" label="storage" value={data.storage}
                                   handleChange={(e) => setData('storage', e.target.value)}
                        />
                    </>


                    <>
                        <InputLabel id="release_date" >تاریخ عرضه:</InputLabel>
                        <TextInput id="release_date" type="date" label="release_date" value={data.release_date}
                                   handleChange={(e) => setData('release_date', e.target.value)}
                        />
                    </>

                    <InputLabel id="count" >تعداد موجود در انبار:</InputLabel>
                    <TextInput id="count" type="text" label="count" value={data.count}
                               handleChange={(e) => setData('count', e.target.value)}
                    />

                    <InputLabel id="chipset" >پردازنده:</InputLabel>
                    <TextInput id="chipset" type="text" label="chipset" value={data.chipset}
                               handleChange={(e) => setData('chipset', e.target.value)}
                    />

                    <InputLabel id="cpu" >CPU:</InputLabel>
                    <TextInput id="cpu" type="text"  value={data.cpu}
                               handleChange={(e) => setData('cpu', e.target.value)}
                    />

                    <InputLabel id="gpu" >GPU:</InputLabel>
                    <TextInput id="gpu" type="text"  value={data.gpu}
                               handleChange={(e) => setData('gpu', e.target.value)}
                    />

                    <InputLabel id="ram" >Ram:</InputLabel>
                    <TextInput id="ram" type="text"  value={data.ram}
                               handleChange={(e) => setData('ram', e.target.value)}
                    />

                    <InputLabel id="screen" >Screen:</InputLabel>
                    <TextInput id="screen" type="text"  value={data.screen}
                               handleChange={(e) => setData('screen', e.target.value)}
                    />

                    <InputLabel id="os" >OS:</InputLabel>
                    <TextInput id="os" type="text"  value={data.os}
                               handleChange={(e) => setData('os', e.target.value)}
                    />

                    <InputLabel id="battery" >Battery:</InputLabel>
                    <TextInput id="battery" type="text"  value={data.battery}
                               handleChange={(e) => setData('battery', e.target.value)}
                    />

                    <InputLabel id="weight" >وزن:</InputLabel>
                    <TextInput id="weight" type="text"  value={data.weight}
                               handleChange={(e) => setData('weight', e.target.value)}
                    />

                    <InputLabel id="resolution" >Resolution:</InputLabel>
                    <TextInput id="weight" type="text"  value={data.resolution}
                               handleChange={(e) => setData('resolution', e.target.value)}
                    />

                </div>



                <InputLabel id="body" >توضیحات:</InputLabel>
                <div dir="ltr">
                    <CKEditor
                        editor={ Editor }
                        id="editor"
                        config={ editorConfiguration }
                        data="Body"
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setData( 'body' , data);
                            console.log( { event, editor, data } );
                        } }
                    />
                </div>

                <InputLabel id="body" >وضعیت موجود در اتبار:</InputLabel>
                <TextInput id="status" type="text"  value={data.status}
                           handleChange={(e) => setData('status', e.target.value)}  helperText="0 => recording or 1 => completed"
                />

            </div>

            <div className="grid grid-cols-1 mt-4 py-4">
                <PrimaryButton type="submit" className="ml-4 " processing={processing}>Save</PrimaryButton>

            </div>
        </form>
    )
}

// Phone form Component
function TelephoneForm({editorConfiguration}){
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        name : '',
        slug : '',
        brand : '',
        model : '',
        storage : '',
        price : '',
        release_date : '',
        images : null,
        body : '',
        status : 0,
        chipset : '',
        cpu : '',
        gpu : '',
        ram : '',
        screen : '',
        os : '',
        battery : '',
        weight : '',
        resolution : '',
        type : '',
        color : '',
        network : '',
        sim : '',
        display : '',
        camera : '' ,
        size : '',
        count : '',
    });
    const [type, setType] = useState('');
    const [brand] = useState('');
    const submit = (e) => {
        e.preventDefault();
        post(route('course.store'), {forceFormData:true});
    };

    return(
        <form onSubmit={submit}>
            <p>تلفن همراه</p>
            <div className="grid grid-cols-1 py-5 px-6 gap-4">
                <InputLabel value="نام"/>
                <TextInput
                    id="title"
                    label="نام"
                    value={data.name}
                    handleChange={(e) => setData('name', e.target.value)}
                    autoComplete="name"
                />
                <InputError className="mt-2" message={errors.name} />

                <InputLabel value="اسلاگ slug"/>
                <TextInput
                    id="slug"
                    type="text"
                    label="Slug"
                    value={data.slug}
                    handleChange={(e) => setData('slug', e.target.value)}
                    className="text-white"
                />
                <InputError className="mt-2" message={errors.slug} />

                <div className="grid grid-cols-4 gap-2">
                    <FormControl id="type" >
                        <FormLabel>نوع:</FormLabel>
                        <Select placeholder="نوع گوشی" value={type}
                                onChange={(event) => setData('type',event.target.value)}>
                            <option className="p-2" value="muliti">مولتی مدیا</option>
                            <option value="gameing">گیمینگ</option>
                            <option value="enginering">مهندسی</option>
                            <option value="public">کاربری عمومی</option>
                        </Select>
                    </FormControl>

                    <FormControl id="brand" >
                        <FormLabel>برند:</FormLabel>
                        <Select placeholder="برند گوشی'" value={brand}
                                onChange={(event) => setData('brand',event.target.value)}>
                            <option className="p-2" value="appell">Appell</option>
                            <option value="hoawi">Hoawi</option>
                            <option value="nokia">Nokia</option>
                            <option value="xiaomi">Xiaomi</option>
                            <option value="samsung">Samsung</option>
                        </Select>
                    </FormControl>

                    <div>
                        <InputLabel id="course_id" className="">عکس ها :</InputLabel>
                        <input type="file" className="my-5"  onChange={e => setData('images', e.target.files[0])}
                               accept="image/png, image/jpeg" multiple/>
                    </div>

                    <div>
                        <InputLabel id="body" >قیمت :</InputLabel>
                        <TextInput id="price" type="text" label="Price" value={data.price}
                                   handleChange={(e) => setData('price', e.target.value)}
                        />
                    </div>


                </div>

                <InputLabel id="model" >مدل:</InputLabel>
                <TextInput id="model" type="text" label="model" value={data.model}
                           handleChange={(e) => setData('model', e.target.value)}
                />

                <div className="grid grid-cols-4 gap-4">
                    <>
                        <InputLabel id="storage" >حافظه:</InputLabel>
                        <TextInput id="storage" type="text" label="storage" value={data.storage}
                                   handleChange={(e) => setData('storage', e.target.value)}
                        />
                    </>


                    <>
                        <InputLabel id="release_date" >تاریخ عرضه:</InputLabel>
                        <TextInput id="release_date" type="date" label="release_date" value={data.release_date}
                                   handleChange={(e) => setData('release_date', e.target.value)}
                        />
                    </>

                    <InputLabel id="color" >رنگ ها:</InputLabel>
                    <TextInput id="color" type="text"  value={data.color}
                               handleChange={(e) => setData('color', e.target.value)}
                    />

                    <InputLabel id="color" >:network</InputLabel>
                    <TextInput id="network" type="text"  value={data.network}
                               handleChange={(e) => setData('network', e.target.value)}
                    />

                    <InputLabel id="sim" >:Sim</InputLabel>
                    <TextInput id="sim" type="text"  value={data.sim}
                               handleChange={(e) => setData('sim', e.target.value)}
                    />

                    <InputLabel id="display" >:Display</InputLabel>
                    <TextInput id="display" type="text"  value={data.display}
                               handleChange={(e) => setData('display', e.target.value)}
                    />

                    <InputLabel id="camera" >:Camera</InputLabel>
                    <TextInput id="camera" type="text"  value={data.camera}
                               handleChange={(e) => setData('camera', e.target.value)}
                    />

                    <InputLabel id="size" >:Size</InputLabel>
                    <TextInput id="size" type="text"  value={data.size}
                               handleChange={(e) => setData('size', e.target.value)}
                    />

                    <InputLabel id="count" >تعداد موجود در انبار:</InputLabel>
                    <TextInput id="count" type="text" label="count" value={data.count}
                               handleChange={(e) => setData('count', e.target.value)}
                    />

                    <InputLabel id="chipset" >پردازنده:</InputLabel>
                    <TextInput id="chipset" type="text" label="chipset" value={data.chipset}
                               handleChange={(e) => setData('chipset', e.target.value)}
                    />

                    <InputLabel id="cpu" >CPU:</InputLabel>
                    <TextInput id="cpu" type="text"  value={data.cpu}
                               handleChange={(e) => setData('cpu', e.target.value)}
                    />

                    <InputLabel id="gpu" >GPU:</InputLabel>
                    <TextInput id="gpu" type="text"  value={data.gpu}
                               handleChange={(e) => setData('gpu', e.target.value)}
                    />

                    <InputLabel id="ram" >Ram:</InputLabel>
                    <TextInput id="ram" type="text"  value={data.ram}
                               handleChange={(e) => setData('ram', e.target.value)}
                    />

                    <InputLabel id="screen" >Screen:</InputLabel>
                    <TextInput id="screen" type="text"  value={data.screen}
                               handleChange={(e) => setData('screen', e.target.value)}
                    />

                    <InputLabel id="os" >OS:</InputLabel>
                    <TextInput id="os" type="text"  value={data.os}
                               handleChange={(e) => setData('os', e.target.value)}
                    />

                    <InputLabel id="battery" >Battery:</InputLabel>
                    <TextInput id="battery" type="text"  value={data.battery}
                               handleChange={(e) => setData('battery', e.target.value)}
                    />

                    <InputLabel id="weight" >وزن:</InputLabel>
                    <TextInput id="weight" type="text"  value={data.weight}
                               handleChange={(e) => setData('weight', e.target.value)}
                    />

                    <InputLabel id="resolution" >Resolution:</InputLabel>
                    <TextInput id="weight" type="text"  value={data.resolution}
                               handleChange={(e) => setData('resolution', e.target.value)}
                    />

                </div>



                <InputLabel id="body" >توضیحات:</InputLabel>
                <div dir="ltr">
                    <CKEditor
                        editor={ Editor }
                        id="editor"
                        config={ editorConfiguration }
                        data="Body"
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setData( 'body' , data);
                            console.log( { event, editor, data } );
                        } }
                    />
                </div>

                <InputLabel id="body" >وضعیت موجود در اتبار:</InputLabel>
                <TextInput id="status" type="text"  value={data.status}
                           handleChange={(e) => setData('status', e.target.value)}  helperText="0 => recording or 1 => completed"
                />

            </div>

            <div className="grid grid-cols-1 mt-4 py-4">
                <PrimaryButton type="submit" className="ml-4 " processing={processing}>Save</PrimaryButton>

            </div>
        </form>
    )
}

// Data storage form Component
function DataStorageForm({editorConfiguration}){
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        name : '',
        slug : '',
        brand : '',
        model : '',
        storage : '',
        price : '',
        release_date : '',
        images : null,
        body : '',
        weight : '',
        type : '',
        color : '',
        count : '',
    });
    const [type, setType] = useState('');
    const [brand] = useState('');
    const submit = (e) => {
        // Prevent the default action of the form
        e.preventDefault();
        // Call the post function with the route and forceFormData as parameters

        post(route('p'), {forceFormData:true});
    };

    return(
        <form onSubmit={submit}>
            <p>حافظه ذخیره سازی</p>
            <div className="grid grid-cols-1 py-5 px-6 gap-4">
                <InputLabel value="نام"/>
                <TextInput
                    id="title"
                    label="نام"
                    value={data.name}
                    handleChange={(e) => setData('name', e.target.value)}
                    autoComplete="name"
                />
                <InputError className="mt-2" message={errors.name} />

                <InputLabel value="اسلاگ slug"/>
                <TextInput
                    id="slug"
                    type="text"
                    label="Slug"
                    value={data.slug}
                    handleChange={(e) => setData('slug', e.target.value)}
                    className="text-white"
                />
                <InputError className="mt-2" message={errors.slug} />

                <div className="grid grid-cols-4 gap-2">
                    <FormControl id="type" >
                        <FormLabel>نوع:</FormLabel>
                        <Select placeholder="نوع حافظه" value={type}
                                onChange={(event) => setData('type',event.target.value)}>
                            <option className="p-2" value="flash">فلش</option>
                            <option value="memory">مموری</option>
                            <option value="ssd">SSD</option>
                            <option value="hdd">HDD</option>
                        </Select>
                    </FormControl>

                    <FormControl id="brand" >
                        <FormLabel>برند:</FormLabel>
                        <Select placeholder="برند حافظه" value={brand}
                                onChange={(event) => setData('brand',event.target.value)}>
                            <option className="p-2" value="appell">Appell</option>
                            <option value="hoawi">Hoawi</option>
                            <option value="nokia">Nokia</option>
                            <option value="hp">HP</option>
                            <option value="xiaomi">Xiaomi</option>
                            <option value="samsung">Samsung</option>
                        </Select>
                    </FormControl>

                    <div>
                        <InputLabel id="course_id" className="">عکس ها :</InputLabel>
                        <input type="file" className="my-5"  onChange={e => setData('images', e.target.files[0])}
                               accept="image/png, image/jpeg" multiple/>
                    </div>

                    <div>
                        <InputLabel id="body" >قیمت :</InputLabel>
                        <TextInput id="price" type="text" label="Price" value={data.price}
                                   handleChange={(e) => setData('price', e.target.value)}
                        />
                    </div>


                </div>

                <InputLabel id="model" >مدل:</InputLabel>
                <TextInput id="model" type="text" label="model" value={data.model}
                           handleChange={(e) => setData('model', e.target.value)}
                />

                <div className="grid grid-cols-4 gap-4">
                    <>
                        <InputLabel id="storage" >حافظه:</InputLabel>
                        <TextInput id="storage" type="text" label="storage" value={data.storage}
                                   handleChange={(e) => setData('storage', e.target.value)}
                        />
                    </>


                    <>
                        <InputLabel id="release_date" >تاریخ عرضه:</InputLabel>
                        <TextInput id="release_date" type="date" label="release_date" value={data.release_date}
                                   handleChange={(e) => setData('release_date', e.target.value)}
                        />
                    </>

                    <InputLabel id="color" >رنگ ها:</InputLabel>
                    <TextInput id="color" type="text"  value={data.color}
                               handleChange={(e) => setData('color', e.target.value)}
                    />




                    <InputLabel id="count" >تعداد موجود در انبار:</InputLabel>
                    <TextInput id="count" type="text" label="count" value={data.count}
                               handleChange={(e) => setData('count', e.target.value)}
                    />




                    <InputLabel id="weight" >وزن:</InputLabel>
                    <TextInput id="weight" type="text"  value={data.weight}
                               handleChange={(e) => setData('weight', e.target.value)}
                    />


                </div>



                <InputLabel id="body" >توضیحات:</InputLabel>
                <div dir="ltr">
                    <CKEditor
                        editor={ Editor }
                        id="editor"
                        config={ editorConfiguration }
                        data="Body"
                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            setData( 'body' , data);
                            console.log( { event, editor, data } );
                        } }
                    />
                </div>

                <InputLabel id="body" >وضعیت موجود در اتبار:</InputLabel>
                <TextInput id="status" type="text"  value={data.status}
                           handleChange={(e) => setData('status', e.target.value)}  helperText="0 => recording or 1 => completed"
                />

            </div>

            <div className="grid grid-cols-1 mt-4 py-4">
                <PrimaryButton type="submit" className="ml-4 " processing={processing}>Save</PrimaryButton>

            </div>
        </form>
    )
}
