export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  checkItemQualityGreaterThan0(itemQuality: number, itemName: String): boolean {
    if (itemQuality > 0 && itemName != "Sulfuras, Hand of Ragnaros")
      return true;
    else return false;
  }

  updateQuality() {
    this.items.forEach((currentItem) => {
      const itemName = currentItem.name;
      let itemQuality = currentItem.quality;
      let itemSellin = currentItem.sellIn;
      if (
        itemName != "Aged Brie" &&
        itemName != "Backstage passes to a TAFKAL80ETC concert" &&
        this.checkItemQualityGreaterThan0(itemQuality, itemName)
      ) {
        itemQuality = itemQuality - 1;
      } else {
        if (itemQuality < 50) {
          itemQuality = itemQuality + 1;
          if (itemName == "Backstage passes to a TAFKAL80ETC concert") {
            if (itemSellin < 11 && itemQuality < 50) {
              itemQuality = itemQuality + 1;
            }
            if (itemSellin < 6 && itemQuality < 50) {
              itemQuality = itemQuality + 1;
            }
          }
        }
      }
      if (itemName != "Sulfuras, Hand of Ragnaros") {
        itemSellin = itemSellin - 1;
      }
      if (itemSellin < 0) {
        if (
          itemName != "Aged Brie" &&
          itemName != "Backstage passes to a TAFKAL80ETC concert" &&
          this.checkItemQualityGreaterThan0(itemQuality, itemName)
        )
          itemQuality = itemQuality - 1;
        else {
          if (itemQuality < 50) {
            itemQuality = itemQuality + 1;
          }
        }
      }
    });

    return this.items;
  }
}
