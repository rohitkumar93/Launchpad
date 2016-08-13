var ghetData = {

    // unique song id
    song_number: 4,
    
    song_name: "GHET1 - Knife Party vs Skrillex",
    
    bpm:176, 
    
    filename: 'ghet',

    // mappings of sound to key
    mappings:{
        chain1:["",   "c10","","",   "d14","d13","d12","b0", "b1", "b2", "e3", "b3",
                "",   "",   "","d11","d10","d9", "d8", "b4", "b5", "b6", "b7", "e2",
                "a12","",   "","d7", "d6", "d5", "d4", "b8", "b9", "b10","b11","",
                "",   "",   "","d3", "d2", "d1", "d0", "b12","b13","b14","b15",""],
                
        chain2:["c2", "c10","a4","d15","d14","d13","d12","b0", "b1", "b2", "b3", "e3",
                "a9", "a14","a5","d11","d10","d9", "d8", "c13","c1", "c3", "b7", "e2",
                "a12","a0", "a6","d7", "d6", "d5", "d4", "b8", "b9", "b10","b11","a13",
                "a10","a11","a1","d3", "d2", "d1", "d0", "b12","b13","b14","b15",""],
                
        chain3:["c4", "c10","a14","d0", "",   "d2", "d3", "",   "b1","b2", "b3","",
                "a13","a0", "",   "d4", "d5", "d6", "d7", "b4", "d9","b6", "b7","",
                "a12","d11","",   "d8", "d9", "d10","d11","d0", "b9","b10","b11","",
                "",   "",   "",   "d12","d13","d14","d15","b12","d8","b14","b15",""],
                
        chain4:["eb15","eb13","ed4_1","",   "c10","",  "",   "",   "b1", "b2", "",   "",
                "eb11","eb6", "ed4_2","",   "d2", "d3","d13","",   "b5", "b6", "b7", "",
                "ea12","ea13","ed8_1","a12","a13","d2","d14","b8", "b9", "b10","b11","d1",
                "ec10","eb7", "ed8_2","",   "",   "d1","d15","b12","b13","b14","b15",""]
    },
    
    // which keys need to be help to play through
    holdToPlay:{
        chain1:[],
        
        chain2:[],
        
        chain3:[],
        
        chain4:[]
    },
    
    // sets of keys that are linked (only one can be playing at a time)
    linkedAreas:{
        chain1:[],
        
        chain2:[],
        
        chain3:[],
        
        chain4:[]
    },
    
    soundUrls:{
        chain1:{
            a12:"https://www.dropbox.com/s/0686utbry03lbjj/a12.mp3?dl=0",
            b0:"https://www.dropbox.com/s/dynli0vcqlz7gs2/b0.mp3?dl=0",
            b1:"https://www.dropbox.com/s/gjgidxokdtu5s4j/b1.mp3?dl=0",
            b2:"https://www.dropbox.com/s/qjq4bonvclythl0/b2.mp3?dl=0",
            b3:"https://www.dropbox.com/s/qb9p25kx75drdn1/b3.mp3?dl=0",
            b4:"https://www.dropbox.com/s/v6p6m8qph1d3f7z/b4.mp3?dl=0",
            b5:"https://www.dropbox.com/s/r8bxn022g1xwtvf/b5.mp3?dl=0",
            b6:"https://www.dropbox.com/s/3h6g1r0yyiyu0n9/b6.mp3?dl=0",
            b7:"https://www.dropbox.com/s/2sus50lnkpfjzc0/b7.mp3?dl=0",
            b8:"https://www.dropbox.com/s/sltk4i5vhmooljs/b8.mp3?dl=0",
            b9:"https://www.dropbox.com/s/oa6dw7ebv8haikv/b9.mp3?dl=0",
            b10:"https://www.dropbox.com/s/l7w88wojss4mnn8/b10.mp3?dl=0",
            b11:"https://www.dropbox.com/s/w959p8rxrczhd5x/b11.mp3?dl=0",
            b12:"https://www.dropbox.com/s/jn83jffzrujacud/b12.mp3?dl=0",
            b13:"https://www.dropbox.com/s/82mbu3pbbklfju1/b13.mp3?dl=0",
            b14:"https://www.dropbox.com/s/5fc0et6wy51om0e/b14.mp3?dl=0",
            b15:"https://www.dropbox.com/s/f7ejio36hgauv7w/b15.mp3?dl=0",
            c10:"https://www.dropbox.com/s/9ut9hm2pj15xnwf/c10.mp3?dl=0",
            d0:"https://www.dropbox.com/s/vr63g3cmnyki729/d0.mp3?dl=0",
            d1:"https://www.dropbox.com/s/r3exllflyvp5ncc/d1.mp3?dl=0",
            d2:"https://www.dropbox.com/s/ds6tbny8qxyffb2/d2.mp3?dl=0",
            d3:"https://www.dropbox.com/s/l5mj4p0706qvbn1/d3.mp3?dl=0",
            d4:"https://www.dropbox.com/s/f0kya8lta5l5ve3/d4.mp3?dl=0",
            d5:"https://www.dropbox.com/s/7he2am92zqujp1w/d5.mp3?dl=0",
            d6:"https://www.dropbox.com/s/c32b7qa9dbbqs35/d6.mp3?dl=0",
            d7:"https://www.dropbox.com/s/jau0326nd48xj5g/d7.mp3?dl=0",
            d8:"https://www.dropbox.com/s/1edr1pjk39dy0cy/d8.mp3?dl=0",
            d9:"https://www.dropbox.com/s/9fgvjwbz5ph8395/d9.mp3?dl=0",
            d10:"https://www.dropbox.com/s/wkrxyj0wrwpp0zq/d10.mp3?dl=0",
            d11:"https://www.dropbox.com/s/gu3xod7vpsi5j4w/d11.mp3?dl=0",
            d12:"https://www.dropbox.com/s/fnr8rilyltn0k5m/d12.mp3?dl=0",
            d13:"https://www.dropbox.com/s/tro3x06msf3y4gp/d13.mp3?dl=0",
            d14:"https://www.dropbox.com/s/yf6lag40i6t7zg6/d14.mp3?dl=0",
            e2:"https://www.dropbox.com/s/glq7sg3id9foeme/e2.mp3?dl=0",
            e3:"https://www.dropbox.com/s/loheizk9u612s9w/e3.mp3?dl=0"
        },
        chain2:{
            a0:"https://www.dropbox.com/s/xo1nzy393bgsi7t/a0.mp3?dl=0",
            a1:"https://www.dropbox.com/s/sgy8dr0zfqrwpax/a1.mp3?dl=0",
            a4:"https://www.dropbox.com/s/h7g1xx6847facj6/a4.mp3?dl=0",
            a5:"https://www.dropbox.com/s/o36b0xlzh3zmdt8/a5.mp3?dl=0",
            a6:"https://www.dropbox.com/s/lkv24hr6b3s9ef4/a6.mp3?dl=0",
            a9:"https://www.dropbox.com/s/7e8fqtg1j50rc9w/a9.mp3?dl=0",
            a10:"https://www.dropbox.com/s/z3kvf02pejaucby/a10.mp3?dl=0",
            a11:"https://www.dropbox.com/s/dfm6pch9ncubsag/a11.mp3?dl=0",
            a12:"https://www.dropbox.com/s/1hr12ptr1pgf2wc/a12.mp3?dl=0",
            a13:"https://www.dropbox.com/s/azhkc72cx7pk5zm/a13.mp3?dl=0",
            a14:"https://www.dropbox.com/s/n6wtj03vjjkyxpw/a14.mp3?dl=0",
            b0:"https://www.dropbox.com/s/2m7acl31375uecr/b0.mp3?dl=0",
            b1:"https://www.dropbox.com/s/eqf591d1fyuyryl/b1.mp3?dl=0",
            b2:"https://www.dropbox.com/s/m3d3ttdcu7q3xwm/b2.mp3?dl=0",
            b3:"https://www.dropbox.com/s/j69l15vf250zf6b/b3.mp3?dl=0",
            b7:"https://www.dropbox.com/s/fuvhb6we1byayay/b7.mp3?dl=0",
            b8:"https://www.dropbox.com/s/n04g2no1999gzjf/b8.mp3?dl=0",
            b9:"https://www.dropbox.com/s/5vehavvplsn5a7w/b9.mp3?dl=0",
            b10:"https://www.dropbox.com/s/6hf3y2gvefcfc7k/b10.mp3?dl=0",
            b11:"https://www.dropbox.com/s/qqx0f7esnwy3ksj/b11.mp3?dl=0",
            b12:"https://www.dropbox.com/s/ssz1b4f6raqs4l6/b12.mp3?dl=0",
            b13:"https://www.dropbox.com/s/xteg00qphwmyrg1/b13.mp3?dl=0",
            b14:"https://www.dropbox.com/s/3qg9f8bns9nff56/b14.mp3?dl=0",
            b15:"https://www.dropbox.com/s/gs3mpm4mry9kciz/b15.mp3?dl=0",
            c1:"https://www.dropbox.com/s/yupknkcagq1mei2/c1.mp3?dl=0",
            c2:"https://www.dropbox.com/s/kwbt112nszbxvh1/c2.mp3?dl=0",
            c3:"https://www.dropbox.com/s/1l7f1dnxprra4n4/c3.mp3?dl=0",
            c10:"https://www.dropbox.com/s/8f1qv5qgfvrrcde/c10.mp3?dl=0",
            c13:"https://www.dropbox.com/s/7dpz1qmwuaezgri/c13.mp3?dl=0",
            d0:"https://www.dropbox.com/s/cufxy4gdp74qrxo/d0.mp3?dl=0",
            d1:"https://www.dropbox.com/s/ifyad3pga3k0hgh/d1.mp3?dl=0",
            d2:"https://www.dropbox.com/s/dkkyoorvufe298g/d2.mp3?dl=0",
            d3:"https://www.dropbox.com/s/1c2f3xkhuu22fmh/d3.mp3?dl=0",
            d4:"https://www.dropbox.com/s/ajfeng8hf7kwgqz/d4.mp3?dl=0",
            d5:"https://www.dropbox.com/s/yjzu8tupmal2gbv/d5.mp3?dl=0",
            d6:"https://www.dropbox.com/s/4giihgh2lhdonmm/d6.mp3?dl=0",
            d7:"https://www.dropbox.com/s/fgdfavfveyjdopg/d7.mp3?dl=0",
            d8:"https://www.dropbox.com/s/yik1qegp112kw5l/d8.mp3?dl=0",
            d9:"https://www.dropbox.com/s/tupp0s1epafzhbw/d9.mp3?dl=0",
            d10:"https://www.dropbox.com/s/p5tuqxitksuo90o/d10.mp3?dl=0",
            d11:"https://www.dropbox.com/s/cg51y74jbzy5iwv/d11.mp3?dl=0",
            d12:"https://www.dropbox.com/s/wv2k611qdsqwb1r/d12.mp3?dl=0",
            d13:"https://www.dropbox.com/s/z7ogxl45klqow0c/d13.mp3?dl=0",
            d14:"https://www.dropbox.com/s/vy3dhx26z9kjbn2/d14.mp3?dl=0",
            d15:"https://www.dropbox.com/s/k6g117uivcfll7i/d15.mp3?dl=0",
            e2:"https://www.dropbox.com/s/lufucejw8ykgzlq/e2.mp3?dl=0",
            e3:"https://www.dropbox.com/s/k57amr1uz3la54c/e3.mp3?dl=0"
        },
        chain3:{
            a0:"https://www.dropbox.com/s/1yft407xqrq5v55/a0.mp3?dl=0",
            a12:"https://www.dropbox.com/s/9ewk1ssoh0wu4mi/a12.mp3?dl=0",
            a13:"https://www.dropbox.com/s/zsrp8nlik8wpgiw/a13.mp3?dl=0",
            a14:"https://www.dropbox.com/s/6lh4idaycj3ead9/a14.mp3?dl=0",
            b1:"https://www.dropbox.com/s/bjkgjyyrge9njqf/b1.mp3?dl=0",
            b2:"https://www.dropbox.com/s/u89iyqy8jb4va5w/b2.mp3?dl=0",
            b3:"https://www.dropbox.com/s/0jhb6pgrgh4re7k/b3.mp3?dl=0",
            b4:"https://www.dropbox.com/s/leoa07j48qbau5m/b4.mp3?dl=0",
            b6:"https://www.dropbox.com/s/drm6jpdfy5g2i3o/b6.mp3?dl=0",
            b7:"https://www.dropbox.com/s/e16ecoukdb2a97i/b7.mp3?dl=0",
            b9:"https://www.dropbox.com/s/j6pzg4ws4g8kgx8/b9.mp3?dl=0",
            b10:"https://www.dropbox.com/s/7t5dlpinkxfeftn/b10.mp3?dl=0",
            b11:"https://www.dropbox.com/s/pu7imynm4x9gua4/b11.mp3?dl=0",
            b12:"https://www.dropbox.com/s/8hg8j8djen15462/b12.mp3?dl=0",
            b14:"https://www.dropbox.com/s/3u5q365ibo1q210/b14.mp3?dl=0",
            b15:"https://www.dropbox.com/s/6dybg067blk2oku/b15.mp3?dl=0",
            c4:"https://www.dropbox.com/s/y3pzt1tydkmmjcf/c4.mp3?dl=0",
            c10:"https://www.dropbox.com/s/5kg4gr30te39uy0/c10.mp3?dl=0",
            d0:"https://www.dropbox.com/s/6a81c7cg3tjub34/d0.mp3?dl=0",
            d2:"https://www.dropbox.com/s/bf50aiz5adps42l/d2.mp3?dl=0",
            d3:"https://www.dropbox.com/s/6evvxrpvccomfbo/d3.mp3?dl=0",
            d4:"https://www.dropbox.com/s/711acn1djcaln99/d4.mp3?dl=0",
            d5:"https://www.dropbox.com/s/a2y9tm16l9ul420/d5.mp3?dl=0",
            d6:"https://www.dropbox.com/s/obrn898f48gi22g/d6.mp3?dl=0",
            d7:"https://www.dropbox.com/s/rljx044zti8lnle/d7.mp3?dl=0",
            d8:"https://www.dropbox.com/s/y8ovkfyqhfkthep/d8.mp3?dl=0",
            d9:"https://www.dropbox.com/s/65a4tzbq4uzlwdx/d9.mp3?dl=0",
            d10:"https://www.dropbox.com/s/1xuxvelxd8u6ul3/d10.mp3?dl=0",
            d11:"https://www.dropbox.com/s/f7hixppastg29ss/d11.mp3?dl=0",
            d12:"https://www.dropbox.com/s/tck0a6todb9rrg8/d12.mp3?dl=0",
            d13:"https://www.dropbox.com/s/qr3rd3t8qxkg8q0/d13.mp3?dl=0",
            d14:"https://www.dropbox.com/s/7uhhzx9rz0qj6go/d14.mp3?dl=0",
            d15:"https://www.dropbox.com/s/u6sawq9sn2uh26u/d15.mp3?dl=0"
        },
        chain4:{
            a12:"https://www.dropbox.com/s/ihjops9ka41oom4/a12.mp3?dl=0",
            a13:"https://www.dropbox.com/s/lzptzuc4iwvjff6/a13.mp3?dl=0",
            b1:"https://www.dropbox.com/s/vxr63yqdct51zcm/b1.mp3?dl=0",
            b2:"https://www.dropbox.com/s/ae10o599itl5sv4/b2.mp3?dl=0",
            b5:"https://www.dropbox.com/s/15x07ycv3ca42tg/b5.mp3?dl=0",
            b6:"https://www.dropbox.com/s/6f3gfb16bb8duik/b6.mp3?dl=0",
            b7:"https://www.dropbox.com/s/diw4t63zwkw5afe/b7.mp3?dl=0",
            b8:"https://www.dropbox.com/s/6l18k4bj9t9m9x5/b8.mp3?dl=0",
            b9:"https://www.dropbox.com/s/u66a7era0oefxkm/b9.mp3?dl=0",
            b10:"https://www.dropbox.com/s/lqp8yia6i9h5amj/b10.mp3?dl=0",
            b11:"https://www.dropbox.com/s/m005zktf7tqv9yn/b11.mp3?dl=0",
            b12:"https://www.dropbox.com/s/1ia8r732140a2xj/b12.mp3?dl=0",
            b13:"https://www.dropbox.com/s/nyicf38c7i08nfx/b13.mp3?dl=0",
            b14:"https://www.dropbox.com/s/f6mmrmemmjdfx79/b14.mp3?dl=0",
            b15:"https://www.dropbox.com/s/04xmef5hz165kk1/b15.mp3?dl=0",
            c10:"https://www.dropbox.com/s/hb9fruyp9u3g7nx/c10.mp3?dl=0",
            d1:"https://www.dropbox.com/s/d6asm3mxgdyw5tg/d1.mp3?dl=0",
            d2:"https://www.dropbox.com/s/24klalprj40fq27/d2.mp3?dl=0",
            d3:"https://www.dropbox.com/s/w72p66cz787ymj5/d3.mp3?dl=0",
            d13:"https://www.dropbox.com/s/idifazmib3agnfz/d13.mp3?dl=0",
            d14:"https://www.dropbox.com/s/4etesydxqsbraao/d14.mp3?dl=0",
            d15:"https://www.dropbox.com/s/xjxd4dp7voaggtk/d15.mp3?dl=0",
            ea12:"https://www.dropbox.com/s/3q52k93l31lzqlk/ea12.mp3?dl=0",
            ea13:"https://www.dropbox.com/s/99g2v5lwnwk9d54/ea13.mp3?dl=0",
            eb6:"https://www.dropbox.com/s/v5b3so0lxh2zjny/eb6.mp3?dl=0",
            eb7:"https://www.dropbox.com/s/9xnv793ni60vs4d/eb7.mp3?dl=0",
            eb11:"https://www.dropbox.com/s/liv0zrm2k29rg7b/eb11.mp3?dl=0",
            eb13:"https://www.dropbox.com/s/zozf7adpkihsvkh/eb13.mp3?dl=0",
            eb15:"https://www.dropbox.com/s/qlx9ykxrzq2pah5/eb15.mp3?dl=0",
            ec10:"https://www.dropbox.com/s/87vlzvpm9sulpj2/ec10.mp3?dl=0",
            ed4_1:"https://www.dropbox.com/s/5y9dpeqe6632ncp/ed4_1.mp3?dl=0",
            ed4_2:"https://www.dropbox.com/s/2rhdjwzmuqx5osy/ed4_2.mp3?dl=0",
            ed8_1:"https://www.dropbox.com/s/q6m658xma6iwlxg/ed8_1.mp3?dl=0",
            ed8_2:"https://www.dropbox.com/s/bed1ol1eopr2xyt/ed8_2.mp3?dl=0"
        }
    }
}