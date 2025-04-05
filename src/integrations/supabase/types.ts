export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      footer_settings: {
        Row: {
          address: string
          city: string
          company_name: string
          country: string
          created_at: string | null
          id: number
          postal_code: string
          privacy_policy: string
          terms_of_service: string
          updated_at: string | null
          year: number
        }
        Insert: {
          address: string
          city: string
          company_name: string
          country: string
          created_at?: string | null
          id: number
          postal_code: string
          privacy_policy: string
          terms_of_service: string
          updated_at?: string | null
          year: number
        }
        Update: {
          address?: string
          city?: string
          company_name?: string
          country?: string
          created_at?: string | null
          id?: number
          postal_code?: string
          privacy_policy?: string
          terms_of_service?: string
          updated_at?: string | null
          year?: number
        }
        Relationships: []
      }
      premium_locations: {
        Row: {
          created_at: string
          id: number
          image_url: string | null
          name: string
          properties_count: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: number
          image_url?: string | null
          name: string
          properties_count?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: number
          image_url?: string | null
          name?: string
          properties_count?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      properties: {
        Row: {
          address: string | null
          area_m2: number | null
          bathrooms: number | null
          bedrooms: number | null
          city: string | null
          created_at: string | null
          description: string | null
          features: string[] | null
          id: number
          images: string[] | null
          is_featured: boolean | null
          is_hero: boolean | null
          last_viewed_at: string | null
          location_description: string | null
          price: number | null
          property_type: string | null
          status: "disponible" | "vendido" | "reservado" | null
          title: string
          views: number | null
          year_built: number | null
        }
        Insert: {
          address?: string | null
          area_m2?: number | null
          bathrooms?: number | null
          bedrooms?: number | null
          city?: string | null
          created_at?: string | null
          description?: string | null
          features?: string[] | null
          id?: number
          images?: string[] | null
          is_featured?: boolean | null
          is_hero?: boolean | null
          last_viewed_at?: string | null
          location_description?: string | null
          price?: number | null
          property_type?: string | null
          status?: "disponible" | "vendido" | "reservado" | null
          title: string
          views?: number | null
          year_built?: number | null
        }
        Update: {
          address?: string | null
          area_m2?: number | null
          bathrooms?: number | null
          bedrooms?: number | null
          city?: string | null
          created_at?: string | null
          description?: string | null
          features?: string[] | null
          id?: number
          images?: string[] | null
          is_featured?: boolean | null
          is_hero?: boolean | null
          last_viewed_at?: string | null
          location_description?: string | null
          price?: number | null
          property_type?: string | null
          status?: "disponible" | "vendido" | "reservado" | null
          title?: string
          views?: number | null
          year_built?: number | null
        }
        Relationships: []
      }
      settings: {
        Row: {
          about_image: string | null
          about_text: string
          about_title: string | null
          address: string | null
          company_name: string | null
          contact_email: string
          created_at: string | null
          facebook_url: string
          founding_year: string | null
          id: number
          instagram_url: string
          logo_image: string | null
          phone_number: string
          saturday_hours: string | null
          stats_awards: string | null
          stats_awards_description: string | null
          stats_icon1_image: string | null
          stats_icon2_image: string | null
          stats_icon3_image: string | null
          stats_properties: string | null
          stats_properties_description: string | null
          stats_trust: string | null
          stats_trust_description: string | null
          sunday_hours: string | null
          testimonial_author: string | null
          testimonial_text: string | null
          updated_at: string | null
          weekday_hours: string | null
        }
        Insert: {
          about_image?: string | null
          about_text: string
          about_title?: string | null
          address?: string | null
          company_name?: string | null
          contact_email: string
          created_at?: string | null
          facebook_url: string
          founding_year?: string | null
          id: number
          instagram_url: string
          logo_image?: string | null
          phone_number: string
          saturday_hours?: string | null
          stats_awards?: string | null
          stats_awards_description?: string | null
          stats_icon1_image?: string | null
          stats_icon2_image?: string | null
          stats_icon3_image?: string | null
          stats_properties?: string | null
          stats_properties_description?: string | null
          stats_trust?: string | null
          stats_trust_description?: string | null
          sunday_hours?: string | null
          testimonial_author?: string | null
          testimonial_text?: string | null
          updated_at?: string | null
          weekday_hours?: string | null
        }
        Update: {
          about_image?: string | null
          about_text?: string
          about_title?: string | null
          address?: string | null
          company_name?: string | null
          contact_email?: string
          created_at?: string | null
          facebook_url?: string
          founding_year?: string | null
          id?: number
          instagram_url?: string
          logo_image?: string | null
          phone_number?: string
          saturday_hours?: string | null
          stats_awards?: string | null
          stats_awards_description?: string | null
          stats_icon1_image?: string | null
          stats_icon2_image?: string | null
          stats_icon3_image?: string | null
          stats_properties?: string | null
          stats_properties_description?: string | null
          stats_trust?: string | null
          stats_trust_description?: string | null
          sunday_hours?: string | null
          testimonial_author?: string | null
          testimonial_text?: string | null
          updated_at?: string | null
          weekday_hours?: string | null
        }
        Relationships: []
      }
      zone_highlights: {
        Row: {
          created_at: string | null
          id: number
          image_url: string
          is_highlighted: boolean | null
          property_id: number | null
          zone_name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          image_url: string
          is_highlighted?: boolean | null
          property_id?: number | null
          zone_name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          image_url?: string
          is_highlighted?: boolean | null
          property_id?: number | null
          zone_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "zone_highlights_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      property_status: "disponible" | "vendido" | "reservado"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
