import { DefaultUrlSerializer, UrlTree } from "@angular/router";

export class CustomUrlSerializer extends DefaultUrlSerializer {
  private _reverseUrl(url: string): string {
    const startIndex = 1;
    const segmentString = `(${url.substring(startIndex).split('/').join('//')})`;
    return url.substring(0, startIndex) + segmentString;
  }
  private _beautifyUrl(url: string): string {

    // console.log('>>>>',url)
    let newUrl = url.replace('(', '')
              .replace(')', '')
              .split('//').join('/')
              // .replace('outlet-a:', '')

    // console.log(newUrl)
    return newUrl

  }
  override parse(url: string): UrlTree {
    return super.parse(this._reverseUrl(url));
  }
  override serialize(tree: UrlTree): string {
    return this._beautifyUrl(super.serialize(tree));
  }
}



// import { DefaultUrlSerializer, UrlTree } from "@angular/router";

// export class CustomUrlSerializer extends DefaultUrlSerializer {
//   private _reverseUrl(url: string): string {
//     const startIndex = 1;
//     let segmentString = `(${url.substring(startIndex).split('/').join('//')})`;


//     if (segmentString !== '()') {
//       let z = `ooutlet-a:${url}`
//       segmentString = `(${z.substring(startIndex).split('/').join('')})`;
//       return url.substring(0, startIndex) + segmentString;
//     }

//     return url.substring(0, startIndex) + segmentString;

//     // const startIndex = 1;
//     // let z = `ooutlet-a:${url}`
//     // console.log('qqqqqqqqq', `(${z.substring(startIndex).split('/').join('')})`)
//     // console.log(`(${url.substring(startIndex).split('/').join('//')})`)
//     // const segmentString = `(${z.substring(startIndex).split('/').join('')})`;
//     // return url.substring(0, startIndex) + segmentString;
//   }
//   private _beautifyUrl(url: string): string {

//     // console.log('>>>>',url)
//     let newUrl = url.replace('(', '')
//       .replace(')', '')
//       .split('//').join('/')
//       .replace('outlet-a:', '')

//     // console.log(newUrl)
//     return newUrl

//   }
//   override parse(url: string): UrlTree {
//     return super.parse(this._reverseUrl(url));
//   }
//   override serialize(tree: UrlTree): string {
//     return this._beautifyUrl(super.serialize(tree));
//   }
// }
