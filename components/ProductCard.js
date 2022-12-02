import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.href}`} className={styles.ProductCard}>
      <div className={styles.thumbnail}>
        <Image
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          alt={product.imageAlt}
          src={product.imageSrc}
        />
      </div>
      <div className={styles.namePrice}>
        <h2 className={styles.name}>{product.name}</h2>
        <p className={styles.price}>{product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
